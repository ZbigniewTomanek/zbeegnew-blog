---
title: "Dockerized Llama2 Server on GPU"
date: 2023-08-03T18:45:35+02:00
draft: false
author: Zbigniew Tomanek
---

<br>

**TLDR** 
Head over to [this repo](https://github.com/ZbigniewTomanek/llama2-server-docker-gpu) for scripts and instructions to help you get a Llama2 REST server up and running on a GPU. And guess what? You can do it with just two commands.

## Llama Llama Red Pajama

<br>

In DataWalk, we're always on our toes to ensure we're keeping pace with the bad guys. It's why we're constantly striving to give our product the most robust analytical capabilities possible.

Lately, Large Language Models have been making quite a splash, and we couldn't ignore the buzz. Meta recently launched Llama2, a powerful, commercially available Large Language Model. Naturally, we had to check it out to see how it fit into our workflow.

## Selecting the Perfect Model

<br>

But hold on. You can't just wander into the wild and nab your Llama 🦙. We knew these models only show solid zero-shot capabilities when they're sizeable. Hence, we were eyeing the 70B parameters model for our arsenal.

However, here's the kicker: these models are so massive they require not just a powerful GPU, but a ton of memory too. The 70B model with q5 quantization requires at least 48GB of GPU memory to run.

The second hurdle? The raw models Meta releases are not exactly optimized for inference. We'd prefer something compatible with llama.cpp.

Turns out, the good folks over at Huggingface have done some of the heavy lifting already. They've released quantized models in GGML format. You can check out these repos [here](https://huggingface.co/TheBloke)

## Performing Inference on the GPU

<br>

The next step was obvious: nobody enjoys installing a bunch of dependencies and configuring the environment. So, we put together a docker image to allow you to run inference on the GPU with a single command. We dockerized [llama-cpp-python](https://github.com/abetlen/llama-cpp-python) for this, as it's a nifty wrapper around the original [llama.cpp](https://github.com/ggerganov/llama.cpp) but it came out that it does not work out of the box with the GPUs.

But with so many moving parts, getting it all working on the GPU was no walk in the park. After much debugging and troubleshooting, we managed to crack it. I thought I'd use my downtime to share the results so anyone can now effortlessly set up a Llama2 inference server that leverages the GPU.

Head to the [this repository](https://github.com/ZbigniewTomanek/llama2-server-docker-gpu) for scripts and instructions that will enable you to:

- Build the docker image with the Llama2 server and automatically download your chosen model.
- Run the Llama2 REST server on the GPU.
- Test your Llama deployment with a provided CLI.
- Use the Python REST client to chat with your LLAMA.
