#!/bin/sh

# run prettier for each javascript files

SCRIPT_DIR=$(dirname $0)
PRETTIER=prettier

find ${SCRIPT_DIR} -name '*.mjs' | while read i; do (${PRETTIER} ${i} --write &); done
