---
title: "Modern Bayesian Computing Techniques"
date: "2024-11-10"
excerpt: "A deep dive into contemporary approaches for Bayesian inference using Python and R."
tags: ["bayesian", "python", "research"]
codeSnippet:
  language: "python"
  code: |
    import pymc as pm
    import numpy as np

    # Simple Bayesian model
    with pm.Model() as model:
        mu = pm.Normal('mu', mu=0, sigma=10)
        sigma = pm.HalfNormal('sigma', sigma=1)
        y_obs = pm.Normal('y_obs', mu=mu, sigma=sigma, observed=data)

        trace = pm.sample(2000, return_inferencedata=True)
---

Bayesian statistics has seen remarkable advances in computational methods.
In this post, I explore some of the modern techniques that make Bayesian
inference more accessible and powerful than ever before.

From MCMC to variational inference, these tools are transforming how we
approach statistical problems in research and practice.
