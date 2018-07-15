#!/usr/bin/env python3
# takes a text file from LibriSpeech and converts it to json for learnsteno

import sys
import json

if len(sys.argv) < 2:
    print('usage:\n./parse_lesson.py <input.txt> <output.json>')
    sys.exit(1)

in_name = sys.argv[1]
out_name = sys.argv[2]

in_file = open(in_name, 'r')

output = {'wordcount': 0, 'sentences': []}
for line in in_file:
    sentence = []
    sentence.append(line.strip().split(' ', maxsplit=1)[0] + '.opus')
    sentence.append(line.strip().split(' ', maxsplit=1)[1])
    output['sentences'].append(sentence)
    output['wordcount'] += len(line.strip().split(' ', maxsplit=1)[1].split(' '))
in_file.close()

out_file = open(out_name, 'w')
out_file.write(json.dumps(output, sort_keys=True, indent=3))
out_file.close()
