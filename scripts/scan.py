# # import sys
# # print('Hello from Python ')
# # sys.stdout.flush()

# #! /usr/bin/python

# # import logging
# # logging.getLogger("scapy.runtime").setLevel(logging.ERROR)
# # from scapy.all import *

# # dst_ip = "10.20.205.131"
# # src_port = RandShort()
# # dst_port = 1

# # tcp_connect_scan_resp = sr1(IP(dst=dst_ip)/TCP(sport=src_port,dport=dst_port,flags="S"),timeout=10)
# # if(str(type(tcp_connect_scan_resp))=="<type 'NoneType'>"):
# #     print("Closed 1")
# # elif(tcp_connect_scan_resp.haslayer(TCP)):
# #     if(tcp_connect_scan_resp.getlayer(TCP).flags == 0x12):
# #         send_rst = sr(IP(dst=dst_ip)/TCP(sport=src_port,dport=dst_port,flags="AR"),timeout=10)
# #         print("Open")
# #     elif (tcp_connect_scan_resp.getlayer(TCP).flags == 0x14):
# #         print("Closed 2")


# # import pyfiglet
# # import sys
# # import socket
# # from datetime import datetime

# # ascii_banner = pyfiglet.figlet_format("PORT SCANNER")
# # print(ascii_banner)

# # Defining a target
# # if len(sys.argv) == 2:

# # 	# translate hostname to IPv4
# # 	target = socket.gethostbyname(sys.argv[1])
# # else:
# # 	print("Invalid amount of Argument")


# """
# target = "192.168.1.230"

# # Add Banner
# print("-" * 50)
# print("Scanning Target: " + target)
# print("Scanning started at:" + str(datetime.now()))
# print("-" * 50)

# try:

#     # will scan ports between 1 to 65,535
#     for port in range(65000,65535):

#         s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#         socket.setdefaulttimeout(1)
#         # returns an error indicator
#         result = s.connect_ex((target,port))
#         if result ==0:
#             print("Port {} is open".format(port))
#         s.close()

# except KeyboardInterrupt:
#         print("\n Exiting Program !!!!")
#         sys.exit()
# except socket.gaierror:
#         print("\n Hostname Could Not Be Resolved !!!!")
#         sys.exit()
# except socket.error:
#         print("\ Server not responding !!!!")
#         sys.exit()


# from socket import *
# import time
# startTime = time.time()

# if __name__ == '__main__':
#    target = input('Enter the host to be scanned: ')
#    t_IP = "192.168.1.230"
#    print ('Starting scan on host: ', t_IP)

#    for i in range(442, 444):
#       s = socket(AF_INET, SOCK_STREAM)

#       conn = s.connect_ex((t_IP, i))
#       if(conn == 0) :
#         print ('Port %d: OPEN' % (i,))
#       else:
#         print('Port %d: CLOSED' % (i,))
#       s.close()
# print('Time taken:', time.time() - startTime)

# """

# """
# import socket
# import re # imput format checking


# ip_add_pattern = re.compile("^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$")

# port_range_pattern = re.compile("([0-9]+)-([0-9]+)")

# port_min = 0
# port_max = 65535


# open_ports = []

# while True:
#     ip_add_entered = input("\nPlease enter the ip address that you want to scan: ")
#     if ip_add_pattern.search(ip_add_entered):
#         print(f"{ip_add_entered} is a valid ip address")
#         break

# while True:
#     print("Please enter the range of ports you want to scan in format: <int>-<int> (ex would be 60-120)")
#     port_range = input("Enter port range: ")
#     port_range_valid = port_range_pattern.search(port_range.replace(" ",""))
#     if port_range_valid:
#         port_min = int(port_range_valid.group(1))
#         port_max = int(port_range_valid.group(2))
#         break


# for port in range(port_min, port_max + 1):

#     try:

#         with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
#             s.settimeout(0.5)
#             s.connect((ip_add_entered, port))
#             open_ports.append(port)

#     except:

#         print(f"Port {port} is closed")

# for port in open_ports:
#     print(f"Port {port} is open on {ip_add_entered}.")
# """


# # tcp_connect_scan_resp = sr1(IP(dst=dst_ip)/TCP(sport=src_port,dport=dst_port,flags="S"),timeout=10)
# # if(str(type(tcp_connect_scan_resp))=="<type 'NoneType'>"):
# #     print("Closed 1")
# # elif(tcp_connect_scan_resp.haslayer(TCP)):
# #     if(tcp_connect_scan_resp.getlayer(TCP).flags == 0x12):
# #         send_rst = sr(IP(dst=dst_ip)/TCP(sport=src_port,dport=dst_port,flags="AR"),timeout=10)
# #         print("Open")
# #     elif (tcp_connect_scan_resp.getlayer(TCP).flags == 0x14):
# #         print("Closed 2")

# #@app.route('/my_data', methods=['GET', 'POST'])
# def ajax_data():
#     message = request.form['data']
#     print(message)
#     try:
#         return json.dumps({'msg': "Message was successfully sent!"})
#     except Exception as e:
#         return json.dumps({'msg': "Message send error : " + e.message})

# from socket import timeout
# from scapy.all import *

# src_port = RandShort()
# dst_ip = "216.58.196.163"

# dst_port = 12

# response = sr1(IP(dst=dst_ip)/TCP(sport=src_port,dport=dst_port), timeout=3)


# if(response==None):
#     print(f"Port {dst_port} is closed")
# else:
#     if(response.haslayer(TCP)):
#         if(response.getlayer(TCP).flags=="SA"):
#             print("Open")
#         elif(response.getlayer(TCP).flags == "RA"):
#             print(f"Port {dst_port} is open but in use")

from socket import timeout
from scapy.all import *

src_port = RandShort()
dst_ip = input()

dst_port = int(input())

response = sr1(IP(dst=dst_ip)/TCP(sport=src_port, dport=dst_port), timeout=3)


if(response == None):
    print(f"Port closed")
else:
    if(response.haslayer(TCP)):
        if(response.getlayer(TCP).flags == "SA"):
            print("Port Open")
        elif(response.getlayer(TCP).flags == "RA"):
            print(f"Port open-but-used")
