#!/usr/bin/env python3
# takes a lesson file from the original Learn Plover and converts it to a json file

import sys
import json

if len(sys.argv) < 2:
    print('usage:\n./parse_lesson.py <input.txt> <output.json>')
    sys.exit(1)

in_name = sys.argv[1]
out_name = sys.argv[2]

in_file = open(in_name, 'r')

output = {}
output['name'] = in_file.readline().strip()
output['description'] = in_file.readline().strip()
output['words'] = []
for line in in_file:
    words = line.split(':')
    words[0] = words[0].strip()[1:-1]
    words[1] = words[1].strip()
    output['words'].append(words)
in_file.close()

out_file = open(out_name, 'w')
out_file.write(json.dumps(output, sort_keys=True, indent=3))
out_file.close()