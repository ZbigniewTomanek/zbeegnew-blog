#!/bin/bash
hugo
aws s3 sync --profile me ./public/ s3://zbeegnew.dev
aws cloudfront create-invalidation --profile me --distribution-id E3W44YRPLVDQWA --paths "/*"
