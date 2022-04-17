import random
from ipaddress import IPv4Network
from typing import List
from scapy.all import ICMP, IP, sr1, TCP

# Define IP range to scan
network = "192.168.40.0/30"
# Define TCP port range
port_range = [22, 23, 80, 443, 449]

# make list of addresses out of network, set live host counter
addresses = IPv4Network(network)
live_count = 0


def port_scan(host: str, ports: List[int]):
    # Send SYN with random Src Port for each Dst port
    for dst_port in ports:
        src_port = random.randint(1025, 65534)
        resp = sr1(
            IP(dst=host)/TCP(sport=src_port, dport=dst_port, flags="S"), timeout=1,
            verbose=0,
        )
        if resp is None:
            print(f"{host}:{dst_port} is filtered (silently dropped).")

        elif(resp.haslayer(TCP)):
            if(resp.getlayer(TCP).flags == 0x12):
                send_rst = sr(
                    IP(dst=host)/TCP(sport=src_port, dport=dst_port, flags='R'),
                    timeout=1,
                    verbose=0,
                )
                print(f"{host}:{dst_port} is open.")

            elif (resp.getlayer(TCP).flags == 0x14):
                print(f"{host}:{dst_port} is closed.")

        elif(resp.haslayer(ICMP)):
            if(
                int(resp.getlayer(ICMP).type) == 3 and
                int(resp.getlayer(ICMP).code) in (1, 2, 3, 9, 10, 13)
            ):
                print(f"{host}:{dst_port} is filtered (silently dropped).")


# Send ICMP ping request, wait for answer
for host in addresses:
    if (host in (addresses.network_address, addresses.broadcast_address)):
        # Skip network and broadcast addresses
        continue

    resp = sr1(IP(dst=str(host))/ICMP(), timeout=2, verbose=0)

    if resp is None:
        print(f"{host} is down or not responding.")
    elif (
        int(resp.getlayer(ICMP).type) == 3 and
        int(resp.getlayer(ICMP).code) in [1, 2, 3, 9, 10, 13]
    ):
        print(f"{host} is blocking ICMP.")
    else:
        port_scan(str(host), port_range)
        live_count += 1

print(f"{live_count}/{addresses.num_addresses} hosts are online.")
