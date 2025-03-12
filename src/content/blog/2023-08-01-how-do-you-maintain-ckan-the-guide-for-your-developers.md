---
title: "How do you maintain CKAN? Top tips for  developers"
pubDate: 2023-08-01T15:05:52+01:00
author: "Dr Jonathan Berry"
summary: "We’ve put together our top CKAN maintenance tips to keep everything running smoothly."
coverImage: ../../assets/dots/dots10.png
type: "Article"
language: "en"
tags:
  - 6Principles
  - DataManagement
authImage: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
---

Just like all software systems, CKAN requires active ongoing maintenace We’ve got some top tips for you to consider!

---

In [our previous blog](/fjelltopp-astro/articles/2023-05-20-how-to-maintain-ckan-so-you-can-save-lives/) we took a look at what CKAN is and why you should be using it. Just to recap…

CKAN is an Open Source Platform for you to store all of your health data in an organised and accessible way. When used and maintained properly, CKAN helps to optimise your data so that it’s in the best possible shape for making vital decisions.

As we said in our [previous blog,](/fjelltopp-astro/articles/2023-05-20-how-to-maintain-ckan-so-you-can-save-lives/) in order to get the most out of your data and CKAN it has to be properly maintained. Since this is [one of our expertise,](/fjelltopp-astro/services/data-catalogues-and-hubs/) we’ve put together our top tips to keep CKAN running smoothly which you can use with your developers to make sure everything is in tip top shape.

<Image class="w-full md:w-1/3 md:float-left md:mr-5" src="/fjelltopp-astro/src/assets/dots/dots2.jpg" alt="TODO"/>

### Why is active maintenance important?

It’s an ever-changing world out there on the web. You want to ensure that you have the most secure, stable, tidy and feature rich system possible. Much like tidying your house, if you don’t keep on top of it bit-by-bit, it can quickly become an overwhelming and impossible task.

Security patching is perhaps the most urgent reason to undertake active maintenance. New security vulnerabilities are discovered on a daily basis so updates are necessary to prevent data leaks and keep the system running securely. You also need to regularly check everything is backing up properly to ensure data can be restored properly in case of a system failure – you don’t want to be finding out there’s backup issues when it’s too late.

## Any top tips for maintaining CKAN instances?

As it happens, at Fjelltopp we’ve got quite a lot of [experience using CKAN](/fjelltopp-astro/projects/document-management-system-for-the-department-of-hiv-and-aids-malawi-moh/). So we’ve put together our top maintenance tips to keep everything running smoothly…

---

**\[1\] Organise your code base well.**

Minimise the number of repositories and lines of code that you are responsible for maintaining. Remember, every new line of code comes with an ongoing maintenance cost! Avoid forking the core CKAN repository or any third-party extensions. Instead, wherever possible, override the necessary behaviour using [Plugin interfaces](https://docs.ckan.org/en/2.10/extensions/plugin-interfaces.html) in your own single custom extension.

**\[2\] Write good code!**

…not just code that works for now. For instance, only import core CKAN components via the [plugins toolkit](https://docs.ckan.org/en/2.10/extensions/plugins-toolkit.html), use [chained actions](https://docs.ckan.org/en/2.10/extensions/plugins-toolkit.html#ckan.plugins.toolkit.ckan.plugins.toolkit.chained_action) wherever possible, and follow the [documented best practices](https://docs.ckan.org/en/2.10/extensions/best-practices.html). When in doubt, draw on examples in [core CKAN extensions](https://github.com/ckan/ckan/tree/master/ckanext), or those developed by the core CKAN team. Good code reduces the ongoing maintenance load.

**\[3\] Adopt a better method of managing dependencies.**

The default CKAN practice of using _requirements.txt_ files is just not a great solution. At Fjelltopp we now use [PipEnv](https://pipenv.pypa.io/) to create a single locked set of dependencies for our CKAN projects. This helps to keep control of our dependencies across all of our development, testing and hosting environments.

**\[4\] Keep up to date with the latest patch versions of CKAN.**

We’re talking security updates. It’s just common sense – you don’t leave your personal belongings open to thieves, so don’t leave your data vulnerable to attackers.

**\[5\] Familiarise yourself with the [migration notes](https://docs.ckan.org/en/2.10/changelog.html)** **as soon a new major CKAN version is announced**.

This will enable you to factor any necessary changes into your ongoing work. It will save you a time-crunch later on. The saying goes ‘diamonds are made under pressure’ but not in this case. Keep your system safe and stable, prepare accordingly.

**\[6\] Use the infrastructure-as-code (IaC) approach**.

This creates replicable, stable and documented infrastructure to host your CKAN deployments. At Fjelltopp we use Ansible to create Kubernetes containerised environments across local and cloud infrastructure.

**\[7\] Stay in touch with the Open Source community**.

They can provide information on troubleshooting particular issues and new preparing for upcoming updates (we recommend [GitHub issues](https://github.com/features/issues) and [Gitter Channel](https://app.gitter.im/#/room/#ckan_chat:gitter.im) for this). This way you can resolve issues before they become a problem, and strategically manage your development priorities.

---

These are just a few of our top tips for how to maintain CKAN. Keeping on top of these steps should help you to keep CKAN well maintained and your data in shipshape, but it doesn’t stop there. If you want to have a chat about CKAN maintenance and how to do it right, please [get in touch](/fjelltopp-astro/#contact) with the Fjelltopp team today.

### We’re here to help

You don’t need to sit wondering how to maintain CKAN, we’re here to help however little or as much as you may need. The goal is to harmonise your health data no matter how you get there.

If you’d like to keep in the know with Fjelltopp tips, tricks and news follow us on [LinkedIn](https://d38hhv04.eu1.hubspotlinksstarter.com/Ctc/X+113/d38HHV04/VVFkDR7DP3zVW6xxpYC3xy6DRW31NlPp4YwwKpN8DGmDm3lSc3V1-WJV7CgTWyW3BT0NQ5vfG-zW5HF5hL5YKSSdW1T2qV24GD1P1N2Lc_Kby9X_kW2MTh0V4M7xzZW7bGCHT2BDN1rW69pzlV464-pFW3YGV4f5t0NcgW3WKXyZ581lPbW7qs5jz8dK77QW613R7p2B3ffMW8dck081s383JW52dvCs2KHQmgN7VJrBQdkd_DW26pKQY4wM0frW8XKGpC1zFpDSW3zhWm25nhG8PN26jqD9tLsJqW5g0vLV8Qw7JKW1Bs1834MJ6P_N8FBMHtBSMzVW8y_TvW34w726VDtH4H2xzm_fV8gkBp20nMFF3gl61), [Twitter ](https://d38hhv04.eu1.hubspotlinksstarter.com/Ctc/X+113/d38HHV04/VVFkDR7DP3zVW6xxpYC3xy6DRW31NlPp4YwwKpN8DGmD33lSbNV1-WJV7CgV76W8hH-fF5MJ004W3sYrNp3qj-CCW15g8jt1N0hqXW4T91Tp2HFPGrW4zBPwZ5gCHhFW49YW3L3rXsRPW57M-xT7Ys5pVN5GLGnqhykNdVjqDqx8q-5tCW6_y1tl2FrRgFW11gVkZ666y9-W9g-kfg3kzZkNW7Jnnl86pQStMW1zD1t84cTHSdW4PthYG8DHNZwW2GrNtX6NNG_WW508ZwC5BKRXJW1s4SLs38NJ51W364SKH2m_h9sW69Bkck4PPKd7VVg72g8bMgHLW1wtL3Z6f-xpn35qB1)and [Facebook](https://d38hhv04.eu1.hubspotlinksstarter.com/Ctc/X+113/d38HHV04/VVFkDR7DP3zVW6xxpYC3xy6DRW31NlPp4YwwKpN8DGmD33lSbNV1-WJV7CgLKrW5g-DPc61qSqFW5dCzyb5F9jWbW4Qgd3494pdPWN32fywPtpyG9W4DbbdG5qS0wYN8hnYgHR0dnHW7vbfmn91SYnTW6yJQ334Mdf7kW63vX29748FQxW40YVYs5TCjh5V8pBRW25PlHYW3fZDyY55LvJ0N1ycG8519L3qW88kdGV48jmzmW8QfL0X262yQgW6vXT155rBzCJN3CdrT4y3xD2W667XJr8QrQwpW7HwVHp6rXHJsW23Hw5Q4QFhrKW8t-5g51VcGBrVHlldj5kvM2j32ZB1). For those of you who don’t want to miss a thing you can sign up to our newsletter below! That way you’ll never miss an update.
