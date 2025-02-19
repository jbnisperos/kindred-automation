#!/bin/bash
set -e
echo "Uploading pipeline.yml to Buildkite..."
buildkite-agent pipeline upload .buildkite/pipeline.yml

