# TCP port scanner

<h4>Pracheth P Thamankar, Varun S Hoskere and Tushar N Kumar</h4>

## About

This is a simple and lightweight Tcp port scanning Desktop application written using Python and Electron.js. The app uses the scapy networking package in the backend.
The Graphical user Interface is written using HTML and Electron JS.

## Working

The user must provide a valid IP address or a domain name along with the port number to be checked.

The application then sends a post request to a server to with the said information fields as the request body.

The server runs the Python script with the fields as parameters using standard scapy library function to obtain result

## Usage

The application can be run by using the command `npm start` within its folder

The Application gives the user the option to run a simple Tcp port scan.

On providing a valid IP address and port number the application will, after scanning,
provide a result with the following information

- number of packets recieved
- number of packets answered
- number of packets remaining
- status of target port

## Installation

1. Install node v16.14.2
1. Run npm init `npm init`
1. Install python v3.9.1
1. Install scapy library using pip `pip install scapy`
