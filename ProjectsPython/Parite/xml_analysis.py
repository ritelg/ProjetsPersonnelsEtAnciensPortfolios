#! /usr/bin/env python3
# coding: utf-8

import os

def launch_analysis(file):
    file_path = os.path.join(os.path.dirname(__file__), 'data', file)
    with open(file_path, 'r') as file:
        preview = file.readline()
    print(preview)

def main():
    launch_analysis('current_mps.csv')

if __name__ == '__main__':
    main()