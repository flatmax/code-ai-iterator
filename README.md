Index: ax
===================================================================
--- ax	Original
+++ ax	Modified
@@ -1,425 +1,458 @@
-    PID TTY      STAT   TIME COMMAND
-      1 ?        Ss     0:02 /sbin/init splash
-      2 ?        S      0:00 [kthreadd]
-      3 ?        S      0:00 [pool_workqueue_release]
-      4 ?        I<     0:00 [kworker/R-rcu_g]
-      5 ?        I<     0:00 [kworker/R-rcu_p]
-      6 ?        I<     0:00 [kworker/R-slub_]
-      7 ?        I<     0:00 [kworker/R-netns]
-      8 ?        I      0:00 [kworker/0:0-events]
-     10 ?        I<     0:00 [kworker/0:0H-events_highpri]
-     12 ?        I<     0:00 [kworker/R-mm_pe]
-     13 ?        I      0:00 [rcu_tasks_kthread]
-     14 ?        I      0:00 [rcu_tasks_rude_kthread]
-     15 ?        I      0:00 [rcu_tasks_trace_kthread]
-     16 ?        S      0:00 [ksoftirqd/0]
-     17 ?        I      0:03 [rcu_preempt]
-     18 ?        S      0:00 [migration/0]
-     19 ?        S      0:00 [idle_inject/0]
-     20 ?        S      0:00 [cpuhp/0]
-     21 ?        S      0:00 [cpuhp/2]
-     22 ?        S      0:00 [idle_inject/2]
-     23 ?        S      0:00 [migration/2]
-     24 ?        S      0:00 [ksoftirqd/2]
-     26 ?        I<     0:00 [kworker/2:0H-events_highpri]
-     27 ?        S      0:00 [cpuhp/4]
-     28 ?        S      0:00 [idle_inject/4]
-     29 ?        S      0:00 [migration/4]
-     30 ?        S      0:00 [ksoftirqd/4]
-     32 ?        I<     0:00 [kworker/4:0H-events_highpri]
-     33 ?        S      0:00 [cpuhp/6]
-     34 ?        S      0:00 [idle_inject/6]
-     35 ?        S      0:00 [migration/6]
-     36 ?        S      0:00 [ksoftirqd/6]
-     38 ?        I<     0:00 [kworker/6:0H-events_highpri]
-     39 ?        S      0:00 [cpuhp/8]
-     40 ?        S      0:00 [idle_inject/8]
-     41 ?        S      0:00 [migration/8]
-     42 ?        S      0:00 [ksoftirqd/8]
-     43 ?        I      0:00 [kworker/8:0-cgroup_destroy]
-     44 ?        I<     0:00 [kworker/8:0H-events_highpri]
-     45 ?        S      0:00 [cpuhp/10]
-     46 ?        S      0:00 [idle_inject/10]
-     47 ?        S      0:00 [migration/10]
-     48 ?        S      0:00 [ksoftirqd/10]
-     49 ?        I      0:00 [kworker/10:0-inet_frag_wq]
-     50 ?        I<     0:00 [kworker/10:0H-events_highpri]
-     51 ?        S      0:00 [cpuhp/12]
-     52 ?        S      0:00 [idle_inject/12]
-     53 ?        S      0:00 [migration/12]
-     54 ?        S      0:00 [ksoftirqd/12]
-     55 ?        I      0:00 [kworker/12:0-mm_percpu_wq]
-     56 ?        I<     0:00 [kworker/12:0H-events_highpri]
-     57 ?        S      0:00 [cpuhp/14]
-     58 ?        S      0:00 [idle_inject/14]
-     59 ?        S      0:00 [migration/14]
-     60 ?        S      0:00 [ksoftirqd/14]
-     62 ?        I<     0:00 [kworker/14:0H-events_highpri]
-     63 ?        S      0:00 [cpuhp/1]
-     64 ?        S      0:00 [idle_inject/1]
-     65 ?        S      0:00 [migration/1]
-     66 ?        S      0:00 [ksoftirqd/1]
-     68 ?        I<     0:00 [kworker/1:0H-kblockd]
-     69 ?        S      0:00 [cpuhp/3]
-     70 ?        S      0:00 [idle_inject/3]
-     71 ?        S      0:00 [migration/3]
-     72 ?        S      0:00 [ksoftirqd/3]
-     73 ?        I      0:00 [kworker/3:0-events]
-     74 ?        I<     0:00 [kworker/3:0H-events_highpri]
-     75 ?        S      0:00 [cpuhp/5]
-     76 ?        S      0:00 [idle_inject/5]
-     77 ?        S      0:00 [migration/5]
-     78 ?        S      0:00 [ksoftirqd/5]
-     80 ?        I<     0:00 [kworker/5:0H-events_highpri]
-     81 ?        S      0:00 [cpuhp/7]
-     82 ?        S      0:00 [idle_inject/7]
-     83 ?        S      0:00 [migration/7]
-     84 ?        S      0:00 [ksoftirqd/7]
-     86 ?        I<     0:00 [kworker/7:0H-events_highpri]
-     87 ?        S      0:00 [cpuhp/9]
-     88 ?        S      0:00 [idle_inject/9]
-     89 ?        S      0:00 [migration/9]
-     90 ?        S      0:00 [ksoftirqd/9]
-     91 ?        I      0:00 [kworker/9:0-events]
-     92 ?        I<     0:00 [kworker/9:0H-events_highpri]
-     93 ?        S      0:00 [cpuhp/11]
-     94 ?        S      0:00 [idle_inject/11]
-     95 ?        S      0:00 [migration/11]
-     96 ?        S      0:00 [ksoftirqd/11]
-     98 ?        I<     0:00 [kworker/11:0H-events_highpri]
-     99 ?        S      0:00 [cpuhp/13]
-    100 ?        S      0:00 [idle_inject/13]
-    101 ?        S      0:00 [migration/13]
-    102 ?        S      0:00 [ksoftirqd/13]
-    103 ?        I      0:00 [kworker/13:0-events]
-    104 ?        I<     0:00 [kworker/13:0H-events_highpri]
-    105 ?        S      0:00 [cpuhp/15]
-    106 ?        S      0:00 [idle_inject/15]
-    107 ?        S      0:00 [migration/15]
-    108 ?        S      0:00 [ksoftirqd/15]
-    110 ?        I<     0:00 [kworker/15:0H-events_highpri]
-    111 ?        S      0:00 [kdevtmpfs]
-    112 ?        I<     0:00 [kworker/R-inet_]
-    114 ?        S      0:00 [kauditd]
-    115 ?        S      0:00 [khungtaskd]
-    116 ?        S      0:00 [oom_reaper]
-    118 ?        I<     0:00 [kworker/R-write]
-    119 ?        S      0:00 [kcompactd0]
-    120 ?        S      0:00 [kcompactd1]
-    121 ?        SN     0:00 [ksmd]
-    123 ?        SN     0:00 [khugepaged]
-    124 ?        I<     0:00 [kworker/R-kinte]
-    125 ?        I<     0:00 [kworker/R-kbloc]
-    126 ?        I<     0:00 [kworker/R-blkcg]
-    127 ?        S      0:00 [irq/9-acpi]
-    129 ?        I<     0:00 [kworker/R-tpm_d]
-    130 ?        I<     0:00 [kworker/R-ata_s]
-    131 ?        I<     0:00 [kworker/R-md]
-    132 ?        I<     0:00 [kworker/R-md_bi]
-    133 ?        I<     0:00 [kworker/R-edac-]
-    134 ?        I<     0:00 [kworker/R-devfr]
-    135 ?        S      0:00 [watchdogd]
-    136 ?        I<     0:00 [kworker/12:1H-kblockd]
-    137 ?        I      0:00 [kworker/8:1-mm_percpu_wq]
-    138 ?        S      0:00 [irq/25-AMD-Vi0-Evt]
-    139 ?        S      0:00 [irq/26-AMD-Vi0-PPR]
-    140 ?        S      0:00 [irq/27-AMD-Vi0-GA]
-    141 ?        S      0:00 [kswapd0]
-    142 ?        S      0:00 [kswapd1]
-    143 ?        S      0:00 [ecryptfs-kthread]
-    144 ?        I<     0:00 [kworker/R-kthro]
-    145 ?        S      0:00 [irq/30-pciehp]
-    146 ?        I      0:00 [kworker/2:1-mm_percpu_wq]
-    147 ?        I      0:00 [kworker/3:1-events]
-    148 ?        I      0:00 [kworker/4:1-mm_percpu_wq]
-    151 ?        I      0:00 [kworker/7:1-mm_percpu_wq]
-    154 ?        I      0:00 [kworker/11:1-mm_percpu_wq]
-    156 ?        I      0:00 [kworker/14:1-mm_percpu_wq]
-    157 ?        I      0:00 [kworker/15:1-mm_percpu_wq]
-    158 ?        I<     0:00 [kworker/R-acpi_]
-    159 ?        S      0:00 [hwrng]
-    160 ?        I<     0:00 [kworker/R-mld]
-    161 ?        I<     0:00 [kworker/R-ipv6_]
-    163 ?        I<     0:00 [kworker/2:1H-kblockd]
-    169 ?        I<     0:00 [kworker/R-kstrp]
-    176 ?        I<     0:00 [kworker/R-crypt]
-    187 ?        I<     0:00 [kworker/R-charg]
-    211 ?        I<     0:00 [kworker/15:1H-kblockd]
-    214 ?        I<     0:00 [kworker/11:1H-kblockd]
-    219 ?        I<     0:00 [kworker/7:1H-kblockd]
-    234 ?        I<     0:00 [kworker/9:1H-kblockd]
-    237 ?        I<     0:00 [kworker/3:1H-kblockd]
-    242 ?        I<     0:00 [kworker/4:1H-kblockd]
-    243 ?        I<     0:00 [kworker/6:1H-kblockd]
-    245 ?        I<     0:00 [kworker/5:1H-kblockd]
-    246 ?        I<     0:00 [kworker/1:1H]
-    248 ?        I<     0:00 [kworker/13:1H-kblockd]
-    250 ?        I<     0:00 [kworker/8:1H-kblockd]
-    251 ?        I<     0:00 [kworker/10:1H-kblockd]
-    252 ?        I<     0:00 [kworker/14:1H-kblockd]
-    253 ?        I<     0:00 [kworker/0:1H-kblockd]
-    273 ?        I<     0:00 [kworker/R-nvme-]
-    278 ?        I<     0:00 [kworker/R-nvme-]
-    282 ?        I<     0:00 [kworker/R-nvme-]
-    290 ?        I<     0:00 [kworker/R-nvme-]
-    443 ?        I      0:00 [kworker/14:2-cgroup_destroy]
-    473 ?        S      0:00 [jbd2/nvme0n1p2-8]
-    474 ?        I<     0:00 [kworker/R-ext4-]
-    538 ?        S<s    0:00 /usr/lib/systemd/systemd-journald
-    607 ?        Ss     0:00 /usr/lib/systemd/systemd-udevd
-    663 ?        S      0:00 [psimon]
-    686 ?        I<     0:00 [kworker/R-kdmfl]
-    694 ?        I<     0:00 [kworker/R-kcryp]
-    695 ?        I<     0:00 [kworker/R-kcryp]
-    696 ?        S      0:00 [dmcrypt_write/252:0]
-    791 ?        I<     0:00 [kworker/R-ktpac]
-    886 ?        I<     0:00 [kworker/R-cfg80]
-    945 ?        S      0:15 [irq/68-rtw89_pci]
-    996 ?        I<     0:00 [kworker/R-amdgp]
-   1092 ?        Ss     0:01 /usr/lib/systemd/systemd-oomd
-   1093 ?        I<     0:00 [kworker/R-ttm]
-   1116 ?        Ss     0:00 /usr/lib/systemd/systemd-resolved
-   1119 ?        Ssl    0:00 /usr/lib/systemd/systemd-timesyncd
-   1205 ?        Ssl    0:00 /usr/libexec/accounts-daemon
-   1206 ?        Ss     0:00 /usr/sbin/acpid
-   1209 ?        Ss     0:00 avahi-daemon: running [lappy.local]
-   1210 ?        Ss     0:00 /usr/libexec/bluetooth/bluetoothd
-   1211 ?        Ss     0:00 /usr/sbin/cron -f -P
-   1212 ?        Ss     0:01 @dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
-   1215 ?        Ssl    0:00 /usr/libexec/gnome-remote-desktop-daemon --system
-   1218 ?        Ss     0:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-triggers
-   1220 ?        Ssl    0:00 /usr/lib/polkit-1/polkitd --no-debug
-   1222 ?        Ssl    0:00 /usr/libexec/power-profiles-daemon
-   1231 ?        Ssl    0:01 /usr/lib/snapd/snapd
-   1233 ?        Ssl    0:00 /usr/libexec/switcheroo-control
-   1237 ?        Ss     0:00 /usr/lib/systemd/systemd-logind
-   1241 ?        Ssl    0:00 /usr/libexec/udisks2/udisksd
-   1244 ?        S      0:00 avahi-daemon: chroot helper
-   1279 ?        Ssl    0:01 /usr/sbin/NetworkManager --no-daemon
-   1280 ?        Ss     0:01 /usr/sbin/wpa_supplicant -u -s -O DIR=/run/wpa_supplicant GROUP=netdev
-   1327 ?        Ssl    0:00 /usr/sbin/rsyslogd -n -iNONE
-   1364 ?        Ssl    0:00 /usr/sbin/ModemManager
-   1469 ?        I<     0:00 [kworker/R-amdgp]
-   1470 ?        I<     0:00 [kworker/R-amdgp]
-   1471 ?        I<     0:00 [kworker/R-amdgp]
-   1472 ?        I<     0:00 [kworker/R-dm_vb]
-   1474 ?        S      0:00 [card1-crtc0]
-   1475 ?        S      0:00 [card1-crtc1]
-   1476 ?        S      0:00 [card1-crtc2]
-   1477 ?        S      0:00 [card1-crtc3]
-   1637 ?        Ss     0:00 /usr/sbin/cupsd -l
-   1641 ?        Ssl    0:00 /snap/canonical-livepatch/286/canonical-livepatchd
-   1643 ?        Ss     0:00 /bin/sh /snap/cups/1067/scripts/run-cups-browsed
-   1645 ?        Ss     0:00 /bin/sh /snap/cups/1067/scripts/run-cupsd
-   1648 ?        Ssl    0:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal
-   1735 ?        S      0:00 /usr/lib/cups/notifier/dbus dbus://
-   1772 ?        Ssl    0:00 /usr/sbin/gdm3
-   1809 ?        S      0:00 [psimon]
-   1915 ?        SNsl   0:00 /usr/libexec/rtkit-daemon
-   1935 ?        S      0:00 cupsd -f -s /var/snap/cups/common/etc/cups/cups-files.conf -c /var/snap/cups/common/etc/cups/cupsd.conf
-   2012 ?        S<     0:00 [krfcommd]
-   2058 ?        Ssl    0:00 /usr/libexec/colord
-   2084 ?        S      0:00 /bin/sh /snap/cups/1067/scripts/run-cups-browsed
-   2085 ?        S      0:00 sleep 3600
-   2186 ?        Ssl    0:00 /usr/libexec/upowerd
-   2557 ?        Ssl    0:00 /usr/sbin/cups-browsed
-   2567 ?        Ss     0:00 /usr/sbin/kerneloops --test
-   2572 ?        Ss     0:00 /usr/sbin/kerneloops
-   2596 ?        Ss     0:00 /usr/sbin/nmbd --foreground --no-process-group
-   2896 ?        Ss     0:00 /usr/lib/postfix/sbin/master -w
-   2898 ?        S      0:00 qmgr -l -t unix -u
-   2919 ?        Ss     0:00 /usr/sbin/smbd --foreground --no-process-group
-   2923 ?        S      0:00 smbd: notifyd .
-   2924 ?        S      0:00 smbd: cleanupd 
-   2927 ?        I      0:00 [kworker/5:3-mm_percpu_wq]
-   2997 ?        Sl     0:00 gdm-session-worker [pam/gdm-password]
-   3014 ?        Ss     0:01 /usr/lib/systemd/systemd --user
-   3022 ?        S      0:00 (sd-pam)
-   3033 ?        S<sl   0:01 /usr/bin/pipewire
-   3034 ?        Ssl    0:00 /usr/bin/pipewire -c filter-chain.conf
-   3039 ?        S<sl   0:00 /usr/bin/wireplumber
-   3040 ?        S<sl   0:01 /usr/bin/pipewire-pulse
-   3044 ?        SLsl   0:00 /usr/bin/gnome-keyring-daemon --foreground --components=pkcs11,secrets --control-directory=/run/user/1000/keyring
-   3052 ?        Ss     0:01 /usr/bin/dbus-daemon --session --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
-   3074 ?        Ssl    0:00 /usr/libexec/xdg-document-portal
-   3094 ?        Ssl    0:00 /usr/libexec/xdg-permission-store
-   3102 ?        Ss     0:00 fusermount3 -o rw,nosuid,nodev,fsname=portal,auto_unmount,subtype=portal -- /run/user/1000/doc
-   3149 tty2     Ssl+   0:00 /usr/libexec/gdm-wayland-session env GNOME_SHELL_SESSION_MODE=ubuntu /usr/bin/gnome-session --session=ubuntu
-   3158 tty2     Sl+    0:00 /usr/libexec/gnome-session-binary --session=ubuntu
-   3231 ?        Ssl    0:00 /usr/libexec/gcr-ssh-agent --base-dir /run/user/1000/gcr
-   3235 ?        Ssl    0:00 /usr/libexec/gnome-session-ctl --monitor
-   3249 ?        Ssl    0:00 /usr/libexec/gvfsd
-   3258 ?        Sl     0:00 /usr/libexec/gvfsd-fuse /run/user/1000/gvfs -f
-   3262 ?        Ssl    0:00 /usr/libexec/gnome-session-binary --systemd-service --session=ubuntu
-   3296 ?        Ssl    2:15 /usr/bin/gnome-shell
-   3299 ?        Sl     0:00 /usr/libexec/at-spi-bus-launcher --launch-immediately
-   3310 ?        S      0:00 /usr/bin/dbus-daemon --config-file=/usr/share/defaults/at-spi2/accessibility.conf --nofork --print-address 11 --address=unix:path=/run/user/1000/at-spi/bus
-   3398 ?        Sl     0:00 /usr/libexec/at-spi2-registryd --use-gnome-session
-   3417 ?        Sl     0:00 /usr/libexec/gnome-shell-calendar-server
-   3425 ?        Ssl    0:00 /usr/libexec/evolution-source-registry
-   3428 ?        Ssl    0:00 /usr/libexec/dconf-service
-   3439 ?        Sl     0:00 /usr/bin/gjs -m /usr/share/gnome-shell/org.gnome.Shell.Notifications
-   3479 ?        Ssl    0:05 /usr/bin/ibus-daemon --panel disable
-   3480 ?        Ssl    0:00 /usr/libexec/gsd-a11y-settings
-   3481 ?        Ssl    0:00 /usr/libexec/gsd-color
-   3482 ?        Ssl    0:00 /usr/libexec/gsd-datetime
-   3485 ?        Ssl    0:00 /usr/libexec/gsd-housekeeping
-   3487 ?        Ssl    0:00 /usr/libexec/gsd-keyboard
-   3488 ?        Ssl    0:00 /usr/libexec/gsd-media-keys
-   3491 ?        Ssl    0:00 /usr/libexec/gsd-power
-   3493 ?        Ssl    0:00 /usr/libexec/gsd-print-notifications
-   3498 ?        Ssl    0:00 /usr/libexec/gsd-rfkill
-   3500 ?        Ssl    0:00 /usr/libexec/gsd-screensaver-proxy
-   3504 ?        Ssl    0:00 /usr/libexec/gsd-sharing
-   3507 ?        Ssl    0:00 /usr/libexec/gsd-smartcard
-   3520 ?        Ssl    0:00 /usr/libexec/gsd-sound
-   3546 ?        Ssl    0:00 /usr/libexec/gsd-wacom
-   3551 ?        Sl     0:00 /usr/libexec/gsd-disk-utility-notify
-   3579 ?        Ssl    0:00 /usr/libexec/gvfs-udisks2-volume-monitor
-   3585 ?        Sl     0:00 /usr/libexec/evolution-data-server/evolution-alarm-notify
-   3633 ?        Sl     0:00 /usr/libexec/ibus-memconf
-   3636 ?        Sl     0:02 /usr/libexec/ibus-extension-gtk3
-   3652 ?        Sl     0:00 /usr/libexec/ibus-portal
-   3665 ?        Sl     0:00 /usr/libexec/goa-daemon
-   3667 ?        Sl     0:03 /snap/snap-store/1216/usr/bin/snap-store --gapplication-service
-   3723 ?        Sl     0:00 /usr/libexec/goa-identity-service
-   3738 ?        Sl     0:00 /usr/libexec/gsd-printer
-   3743 ?        Ssl    0:00 /usr/libexec/evolution-calendar-factory
-   3750 ?        Ssl    0:00 /usr/libexec/gvfs-goa-volume-monitor
-   3757 ?        Ssl    0:00 /usr/libexec/gvfs-mtp-volume-monitor
-   3781 ?        Ssl    0:00 /usr/libexec/gvfs-afc-volume-monitor
-   3797 ?        Ssl    0:00 /usr/libexec/gvfs-gphoto2-volume-monitor
-   3816 ?        Ssl    0:00 /usr/libexec/evolution-addressbook-factory
-   3974 ?        Sl     0:01 /usr/libexec/ibus-engine-simple
-   4034 ?        Sl     0:00 /usr/libexec/gvfsd-trash --spawner :1.20 /org/gtk/gvfs/exec_spaw/0
-   4073 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal
-   4077 ?        SNsl   0:00 /usr/libexec/tracker-miner-fs-3
-   4083 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal-gnome
-   4105 ?        Sl     0:00 /usr/bin/gjs -m /usr/share/gnome-shell/org.gnome.ScreenSaver
-   4136 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal-gtk
-   4167 ?        Ss     0:00 /snap/snapd-desktop-integration/253/usr/bin/snapd-desktop-integration
-   4256 ?        Ssl    0:01 /usr/libexec/fwupd/fwupd
-   4290 ?        Sl     0:00 /snap/snapd-desktop-integration/253/usr/bin/snapd-desktop-integration
-   4309 ?        Ssl    0:00 /usr/libexec/gvfsd-metadata
-   4792 ?        Sl     0:00 /usr/bin/gnome-calendar --gapplication-service
-   5050 ?        I      0:00 [kworker/1:2-mm_percpu_wq]
-   5055 ?        I      0:00 [kworker/1:3-events]
-   5131 ?        S      0:00 /usr/bin/ssh-agent -D -a /run/user/1000/keyring/.ssh
-   5578 ?        Sl     0:00 /usr/bin/snap userd
-   5995 ?        Sl     0:00 /usr/bin/update-notifier
-   6028 ?        S      0:00 tlsmgr -l -t unix -u -c
-   6276 ?        I      0:00 [kworker/13:2-mm_percpu_wq]
-   6331 ?        I      0:06 [kworker/u32:7-iou_exit]
-   6537 ?        I      0:00 [kworker/6:3-mm_percpu_wq]
-   6790 ?        SLl    0:57 /opt/google/chrome/chrome
-   6796 ?        S      0:00 cat
-   6797 ?        S      0:00 cat
-   6799 ?        Sl     0:00 /opt/google/chrome/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler --database=/home/flatmax/.config/google-chrome/Crash Reports --url=https://clients2.google.com/cr/report --annotation=channel= --annotation=lsb-release=Ubuntu 24.04.1 LTS --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=131.0.6778.69 --initial-client-fd=5 --shared-client-connection
-   6801 ?        Sl     0:00 /opt/google/chrome/chrome_crashpad_handler --no-periodic-tasks --monitor-self-annotation=ptype=crashpad-handler --database=/home/flatmax/.config/google-chrome/Crash Reports --url=https://clients2.google.com/cr/report --annotation=channel= --annotation=lsb-release=Ubuntu 24.04.1 LTS --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=131.0.6778.69 --initial-client-fd=4 --shared-client-connection
-   6807 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --no-zygote-sandbox --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
-   6808 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
-   6810 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
-   6821 ?        Sl     0:49 /usr/bin/Xwayland :0 -rootless -noreset -accessx -core -auth /run/user/1000/.mutter-Xwaylandauth.6MI1W2 -listenfd 4 -listenfd 5 -displayfd 6 -initfd 7 -byteswappedclients
-   6841 ?        Ssl    0:00 /usr/libexec/gsd-xsettings
-   6871 ?        Sl     0:00 /usr/libexec/ibus-x11
-   6877 ?        Sl     0:02 /usr/libexec/mutter-x11-frames
-   6906 ?        Sl     1:13 /opt/google/chrome/chrome --type=gpu-process --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --gpu-preferences=UAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAEAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAA --use-gl=angle --use-angle=swiftshader-webgl --shared-files --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   6917 ?        Sl     0:20 /opt/google/chrome/chrome --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   6929 ?        Sl     0:00 /opt/google/chrome/chrome --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7086 ?        Sl     0:41 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=8 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=454616823 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7159 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=12 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=455460891 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7174 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=13 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=457365553 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7208 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=15 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=459268011 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7317 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=23 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=466582259 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7342 ?        Sl     0:29 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=24 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=468043530 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   7414 ?        Sl     0:00 /opt/google/chrome/chrome --type=utility --utility-sub-type=audio.mojom.AudioService --lang=en-GB --service-sandbox-type=none --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   8529 ?        I      0:00 [kworker/10:1-events]
-   8781 ?        Sl     0:04 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=60 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=867460172 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   8816 ?        I      0:00 [kworker/7:2-mm_percpu_wq]
-   9169 ?        I      0:00 [kworker/9:1-events]
-   9264 ?        I      0:03 [kworker/u32:13-iou_exit]
-   9281 ?        I      0:00 [kworker/0:2-events]
-   9301 ?        S      0:00 pickup -l -t unix -u -c
-   9306 ?        Ssl    0:00 /snap/firmware-updater/147/bin/firmware-notifier
-   9520 ?        Ssl    0:00 /usr/bin/rygel
-   9596 ?        Sl     0:00 gjs /usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js -E -P /usr/share/gnome-shell/extensions/ding@rastersoft.com/app
-   9796 ?        Sl     0:03 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=84 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=1196406048 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-   9809 ?        S      0:00 /usr/bin/python3 /usr/bin/gnome-terminal --wait
-   9812 ?        Sl     0:00 /usr/bin/gnome-terminal.real --wait
-   9818 ?        Ssl    0:02 /usr/libexec/gnome-terminal-server
-   9826 pts/0    Ss     0:00 bash
-  10968 ?        SLsl   0:23 /usr/share/windsurf/windsurf
-  10971 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote --no-zygote-sandbox
-  10972 ?        S      0:00 /usr/share/windsurf/chrome-sandbox /usr/share/windsurf/windsurf --type=zygote
-  10973 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote
-  10975 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote
-  11008 ?        Sl     1:46 /usr/share/windsurf/windsurf --type=gpu-process --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --gpu-preferences=WAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAEAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAGAAAAAAAAAAYAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAIAAAAAAAAAA== --shared-files --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  11015 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  11069 ?        Sl     1:26 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=4 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1299115622 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
-  11096 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  11174 ?        Sl     0:25 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=8 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1302627380 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
-  11219 ?        Sl     0:00 /usr/libexec/gvfsd-http --spawner :1.20 /org/gtk/gvfs/exec_spaw/1
-  11260 ?        I<     0:00 [kworker/u33:2-rtw89_tx_wq]
-  11461 ?        SLl    0:08 /opt/Signal/signal-desktop --no-sandbox
-  11465 ?        S      0:00 /opt/Signal/signal-desktop --type=zygote --no-zygote-sandbox --no-sandbox
-  11466 ?        S      0:00 /opt/Signal/signal-desktop --type=zygote --no-sandbox
-  11760 ?        Sl     0:09 /opt/Signal/signal-desktop --type=gpu-process --no-sandbox --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --gpu-preferences=UAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAEAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAA --use-gl=angle --use-angle=swiftshader-webgl --shared-files --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
-  11770 ?        Sl     0:00 /opt/Signal/signal-desktop --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --no-sandbox --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --fetch-schemes=attachment --streaming-schemes=attachment --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
-  11825 ?        Sl     0:28 /opt/Signal/signal-desktop --type=renderer --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --fetch-schemes=attachment --streaming-schemes=attachment --app-path=/opt/Signal/resources/app.asar --no-sandbox --no-zygote --enable-blink-features=CSSPseudoDir,CSSLogical --disable-blink-features=Accelerated2dCanvas,AcceleratedSmallCanvases --no-sandbox --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=4 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1373146429 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
-  12115 ?        I      0:03 [kworker/u32:0-iou_exit]
-  12332 ?        I      0:03 [kworker/u32:1-gfx_high]
-  12337 ?        Sl     0:00 npm start
-  12353 ?        S      0:00 sh -c web-dev-server --node-resolve --open --watch
-  12354 ?        Rl    19:32 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
-  12416 ?        I      0:00 [kworker/4:0-events]
-  12433 ?        Sl     0:00 /usr/libexec/gvfsd-network --spawner :1.20 /org/gtk/gvfs/exec_spaw/2
-  12440 ?        Sl     0:00 /usr/libexec/gvfsd-smb-browse --spawner :1.20 /org/gtk/gvfs/exec_spaw/3
-  12452 ?        I<     0:00 [kworker/u33:4-ttm]
-  12455 ?        I<     0:00 [kworker/u33:7-rtw89_tx_wq]
-  12466 ?        Sl     0:00 /usr/libexec/gvfsd-dnssd --spawner :1.20 /org/gtk/gvfs/exec_spaw/4
-  12539 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  12549 ?        Sl     0:16 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --dns-result-order=ipv4first --inspect-port=0 --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  12577 ?        Sl     0:24 /usr/share/windsurf/resources/app/extensions/windsurf/bin/language_server_linux_x64 --api_server_url https://server.codeium.com --run_child --enable_lsp --extension_server_port 37599 --random_port --inference_api_server_url https://inference.codeium.com --detect_proxy=false --database_dir /home/flatmax/.codeium/windsurf/database/9c0694567290725d9dcba14ade58e297 --enable_index_service --enable_local_search --search_max_workspace_file_count 5000 --indexed_files_retention_period_days 30 --workspace_id file_home_flatmax_CascadeProjects_code_ai_iterator --sentry_telemetry --codeium_dir .codeium/windsurf --parent_pipe_path /tmp/server_27210325d5348f86
-  12611 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/json-language-features/server/dist/node/jsonServerMain --node-ipc --clientProcessId=12549
-  12621 ?        Sl     2:23 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=11 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1819892101 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
-  12665 ?        I      0:00 [kworker/11:2]
-  12676 ?        Sl     0:02 /usr/share/windsurf/windsurf --max-old-space-size=3072 /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/tsserver.js --serverMode partialSemantic --useInferredProjectPerProjectRoot --disableAutomaticTypingAcquisition --cancellationPipeName /tmp/vscode-typescript1000/3a49723def8832862a2f/tscancellation-6315287ceef4c686180b.tmp* --locale en --noGetErrOnBackgroundUpdate --canUseWatchEvents --validateDefaultNpmLocation --useNodeIpc
-  12677 ?        Sl     0:13 /usr/share/windsurf/windsurf --max-old-space-size=3072 /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/tsserver.js --useInferredProjectPerProjectRoot --enableTelemetry --cancellationPipeName /tmp/vscode-typescript1000/3a49723def8832862a2f/tscancellation-2c0d8e3198b445c8e81a.tmp* --locale en --noGetErrOnBackgroundUpdate --canUseWatchEvents --validateDefaultNpmLocation --useNodeIpc
-  12692 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/html-language-features/server/dist/node/htmlServerMain --node-ipc --clientProcessId=12549
-  12703 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/markdown-language-features/dist/serverWorkerMain --node-ipc --clientProcessId=12549
-  12711 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/typingsInstaller.js --globalTypingsCacheLocation /home/flatmax/.cache/typescript/5.6 --enableTelemetry --typesMapLocation /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/typesMap.json --validateDefaultNpmLocation
-  12743 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
-  12759 pts/1    Ss     0:00 /usr/bin/bash --init-file /usr/share/windsurf/resources/app/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-bash.sh
-  12778 pts/1    Sl+    0:02 npm run start
-  12790 ?        Ssl    0:00 /usr/bin/node /usr/share/windsurf/resources/app/extensions/ms-vscode.js-debug/src/watchdog.js
-  12820 pts/1    S+     0:00 sh -c web-dev-server --node-resolve --open --watch
-  12821 pts/1    Sl+    0:02 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
-  12833 ?        Ssl    0:00 /usr/bin/node /usr/share/windsurf/resources/app/extensions/ms-vscode.js-debug/src/watchdog.js
-  12906 ?        I      0:00 [kworker/15:0]
-  13469 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=100 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=2460382797 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-  13548 ?        I      0:00 [kworker/u32:2-events_unbound]
-  13621 ?        I      0:00 [kworker/u32:3-iou_exit]
-  13661 ?        I      0:00 [kworker/u32:4-iou_exit]
-  13724 ?        I      0:00 [kworker/u32:5-gfx_low]
-  13753 ?        I      0:00 [kworker/u32:6-iou_exit]
-  13769 ?        I      0:00 [kworker/5:0-inet_frag_wq]
-  13776 ?        I      0:00 [kworker/2:2-events]
-  13779 ?        I      0:00 [kworker/12:1-cgroup_destroy]
-  13780 ?        I      0:00 [kworker/6:0]
-  13886 ?        Sl     0:00 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/concurrently npm run server npm run client
-  13898 ?        S      0:00 /bin/sh -c npm run client
-  13899 ?        Sl     0:00 npm run client
-  13930 ?        S      0:00 sh -c web-dev-server --node-resolve --open --watch
-  13931 ?        Sl     0:00 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
-  13992 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=107 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3093235894 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-  14007 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=108 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3101426843 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-  14030 ?        I<     0:00 [kworker/u33:0]
-  14080 ?        I      0:00 [kworker/u32:8-events_unbound]
-  14081 ?        I      0:00 [kworker/u32:9-events_unbound]
-  14082 ?        I      0:00 [kworker/u32:10-events_power_efficient]
-  14083 ?        I      0:00 [kworker/u32:11-gfx_low]
-  14084 ?        I      0:00 [kworker/u32:12-gfx_low]
-  14085 ?        I      0:00 [kworker/u32:14]
-  14088 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --extension-process --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=110 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3206081556 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
-  14122 pts/0    R+     0:00 ps ax
-  14123 pts/0    S+     0:00 less
+Index: ax
+===================================================================
+--- ax	Original
++++ ax	Modified
+@@ -1,425 +1,28 @@
+-    PID TTY      STAT   TIME COMMAND
+-      1 ?        Ss     0:02 /sbin/init splash
+-      2 ?        S      0:00 [kthreadd]
+-      3 ?        S      0:00 [pool_workqueue_release]
+-      4 ?        I<     0:00 [kworker/R-rcu_g]
+-      5 ?        I<     0:00 [kworker/R-rcu_p]
+-      6 ?        I<     0:00 [kworker/R-slub_]
+-      7 ?        I<     0:00 [kworker/R-netns]
+-      8 ?        I      0:00 [kworker/0:0-events]
+-     10 ?        I<     0:00 [kworker/0:0H-events_highpri]
+-     12 ?        I<     0:00 [kworker/R-mm_pe]
+-     13 ?        I      0:00 [rcu_tasks_kthread]
+-     14 ?        I      0:00 [rcu_tasks_rude_kthread]
+-     15 ?        I      0:00 [rcu_tasks_trace_kthread]
+-     16 ?        S      0:00 [ksoftirqd/0]
+-     17 ?        I      0:03 [rcu_preempt]
+-     18 ?        S      0:00 [migration/0]
+-     19 ?        S      0:00 [idle_inject/0]
+-     20 ?        S      0:00 [cpuhp/0]
+-     21 ?        S      0:00 [cpuhp/2]
+-     22 ?        S      0:00 [idle_inject/2]
+-     23 ?        S      0:00 [migration/2]
+-     24 ?        S      0:00 [ksoftirqd/2]
+-     26 ?        I<     0:00 [kworker/2:0H-events_highpri]
+-     27 ?        S      0:00 [cpuhp/4]
+-     28 ?        S      0:00 [idle_inject/4]
+-     29 ?        S      0:00 [migration/4]
+-     30 ?        S      0:00 [ksoftirqd/4]
+-     32 ?        I<     0:00 [kworker/4:0H-events_highpri]
+-     33 ?        S      0:00 [cpuhp/6]
+-     34 ?        S      0:00 [idle_inject/6]
+-     35 ?        S      0:00 [migration/6]
+-     36 ?        S      0:00 [ksoftirqd/6]
+-     38 ?        I<     0:00 [kworker/6:0H-events_highpri]
+-     39 ?        S      0:00 [cpuhp/8]
+-     40 ?        S      0:00 [idle_inject/8]
+-     41 ?        S      0:00 [migration/8]
+-     42 ?        S      0:00 [ksoftirqd/8]
+-     43 ?        I      0:00 [kworker/8:0-cgroup_destroy]
+-     44 ?        I<     0:00 [kworker/8:0H-events_highpri]
+-     45 ?        S      0:00 [cpuhp/10]
+-     46 ?        S      0:00 [idle_inject/10]
+-     47 ?        S      0:00 [migration/10]
+-     48 ?        S      0:00 [ksoftirqd/10]
+-     49 ?        I      0:00 [kworker/10:0-inet_frag_wq]
+-     50 ?        I<     0:00 [kworker/10:0H-events_highpri]
+-     51 ?        S      0:00 [cpuhp/12]
+-     52 ?        S      0:00 [idle_inject/12]
+-     53 ?        S      0:00 [migration/12]
+-     54 ?        S      0:00 [ksoftirqd/12]
+-     55 ?        I      0:00 [kworker/12:0-mm_percpu_wq]
+-     56 ?        I<     0:00 [kworker/12:0H-events_highpri]
+-     57 ?        S      0:00 [cpuhp/14]
+-     58 ?        S      0:00 [idle_inject/14]
+-     59 ?        S      0:00 [migration/14]
+-     60 ?        S      0:00 [ksoftirqd/14]
+-     62 ?        I<     0:00 [kworker/14:0H-events_highpri]
+-     63 ?        S      0:00 [cpuhp/1]
+-     64 ?        S      0:00 [idle_inject/1]
+-     65 ?        S      0:00 [migration/1]
+-     66 ?        S      0:00 [ksoftirqd/1]
+-     68 ?        I<     0:00 [kworker/1:0H-kblockd]
+-     69 ?        S      0:00 [cpuhp/3]
+-     70 ?        S      0:00 [idle_inject/3]
+-     71 ?        S      0:00 [migration/3]
+-     72 ?        S      0:00 [ksoftirqd/3]
+-     73 ?        I      0:00 [kworker/3:0-events]
+-     74 ?        I<     0:00 [kworker/3:0H-events_highpri]
+-     75 ?        S      0:00 [cpuhp/5]
+-     76 ?        S      0:00 [idle_inject/5]
+-     77 ?        S      0:00 [migration/5]
+-     78 ?        S      0:00 [ksoftirqd/5]
+-     80 ?        I<     0:00 [kworker/5:0H-events_highpri]
+-     81 ?        S      0:00 [cpuhp/7]
+-     82 ?        S      0:00 [idle_inject/7]
+-     83 ?        S      0:00 [migration/7]
+-     84 ?        S      0:00 [ksoftirqd/7]
+-     86 ?        I<     0:00 [kworker/7:0H-events_highpri]
+-     87 ?        S      0:00 [cpuhp/9]
+-     88 ?        S      0:00 [idle_inject/9]
+-     89 ?        S      0:00 [migration/9]
+-     90 ?        S      0:00 [ksoftirqd/9]
+-     91 ?        I      0:00 [kworker/9:0-events]
+-     92 ?        I<     0:00 [kworker/9:0H-events_highpri]
+-     93 ?        S      0:00 [cpuhp/11]
+-     94 ?        S      0:00 [idle_inject/11]
+-     95 ?        S      0:00 [migration/11]
+-     96 ?        S      0:00 [ksoftirqd/11]
+-     98 ?        I<     0:00 [kworker/11:0H-events_highpri]
+-     99 ?        S      0:00 [cpuhp/13]
+-    100 ?        S      0:00 [idle_inject/13]
+-    101 ?        S      0:00 [migration/13]
+-    102 ?        S      0:00 [ksoftirqd/13]
+-    103 ?        I      0:00 [kworker/13:0-events]
+-    104 ?        I<     0:00 [kworker/13:0H-events_highpri]
+-    105 ?        S      0:00 [cpuhp/15]
+-    106 ?        S      0:00 [idle_inject/15]
+-    107 ?        S      0:00 [migration/15]
+-    108 ?        S      0:00 [ksoftirqd/15]
+-    110 ?        I<     0:00 [kworker/15:0H-events_highpri]
+-    111 ?        S      0:00 [kdevtmpfs]
+-    112 ?        I<     0:00 [kworker/R-inet_]
+-    114 ?        S      0:00 [kauditd]
+-    115 ?        S      0:00 [khungtaskd]
+-    116 ?        S      0:00 [oom_reaper]
+-    118 ?        I<     0:00 [kworker/R-write]
+-    119 ?        S      0:00 [kcompactd0]
+-    120 ?        S      0:00 [kcompactd1]
+-    121 ?        SN     0:00 [ksmd]
+-    123 ?        SN     0:00 [khugepaged]
+-    124 ?        I<     0:00 [kworker/R-kinte]
+-    125 ?        I<     0:00 [kworker/R-kbloc]
+-    126 ?        I<     0:00 [kworker/R-blkcg]
+-    127 ?        S      0:00 [irq/9-acpi]
+-    129 ?        I<     0:00 [kworker/R-tpm_d]
+-    130 ?        I<     0:00 [kworker/R-ata_s]
+-    131 ?        I<     0:00 [kworker/R-md]
+-    132 ?        I<     0:00 [kworker/R-md_bi]
+-    133 ?        I<     0:00 [kworker/R-edac-]
+-    134 ?        I<     0:00 [kworker/R-devfr]
+-    135 ?        S      0:00 [watchdogd]
+-    136 ?        I<     0:00 [kworker/12:1H-kblockd]
+-    137 ?        I      0:00 [kworker/8:1-mm_percpu_wq]
+-    138 ?        S      0:00 [irq/25-AMD-Vi0-Evt]
+-    139 ?        S      0:00 [irq/26-AMD-Vi0-PPR]
+-    140 ?        S      0:00 [irq/27-AMD-Vi0-GA]
+-    141 ?        S      0:00 [kswapd0]
+-    142 ?        S      0:00 [kswapd1]
+-    143 ?        S      0:00 [ecryptfs-kthread]
+-    144 ?        I<     0:00 [kworker/R-kthro]
+-    145 ?        S      0:00 [irq/30-pciehp]
+-    146 ?        I      0:00 [kworker/2:1-mm_percpu_wq]
+-    147 ?        I      0:00 [kworker/3:1-events]
+-    148 ?        I      0:00 [kworker/4:1-mm_percpu_wq]
+-    151 ?        I      0:00 [kworker/7:1-mm_percpu_wq]
+-    154 ?        I      0:00 [kworker/11:1-mm_percpu_wq]
+-    156 ?        I      0:00 [kworker/14:1-mm_percpu_wq]
+-    157 ?        I      0:00 [kworker/15:1-mm_percpu_wq]
+-    158 ?        I<     0:00 [kworker/R-acpi_]
+-    159 ?        S      0:00 [hwrng]
+-    160 ?        I<     0:00 [kworker/R-mld]
+-    161 ?        I<     0:00 [kworker/R-ipv6_]
+-    163 ?        I<     0:00 [kworker/2:1H-kblockd]
+-    169 ?        I<     0:00 [kworker/R-kstrp]
+-    176 ?        I<     0:00 [kworker/R-crypt]
+-    187 ?        I<     0:00 [kworker/R-charg]
+-    211 ?        I<     0:00 [kworker/15:1H-kblockd]
+-    214 ?        I<     0:00 [kworker/11:1H-kblockd]
+-    219 ?        I<     0:00 [kworker/7:1H-kblockd]
+-    234 ?        I<     0:00 [kworker/9:1H-kblockd]
+-    237 ?        I<     0:00 [kworker/3:1H-kblockd]
+-    242 ?        I<     0:00 [kworker/4:1H-kblockd]
+-    243 ?        I<     0:00 [kworker/6:1H-kblockd]
+-    245 ?        I<     0:00 [kworker/5:1H-kblockd]
+-    246 ?        I<     0:00 [kworker/1:1H]
+-    248 ?        I<     0:00 [kworker/13:1H-kblockd]
+-    250 ?        I<     0:00 [kworker/8:1H-kblockd]
+-    251 ?        I<     0:00 [kworker/10:1H-kblockd]
+-    252 ?        I<     0:00 [kworker/14:1H-kblockd]
+-    253 ?        I<     0:00 [kworker/0:1H-kblockd]
+-    273 ?        I<     0:00 [kworker/R-nvme-]
+-    278 ?        I<     0:00 [kworker/R-nvme-]
+-    282 ?        I<     0:00 [kworker/R-nvme-]
+-    290 ?        I<     0:00 [kworker/R-nvme-]
+-    443 ?        I      0:00 [kworker/14:2-cgroup_destroy]
+-    473 ?        S      0:00 [jbd2/nvme0n1p2-8]
+-    474 ?        I<     0:00 [kworker/R-ext4-]
+-    538 ?        S<s    0:00 /usr/lib/systemd/systemd-journald
+-    607 ?        Ss     0:00 /usr/lib/systemd/systemd-udevd
+-    663 ?        S      0:00 [psimon]
+-    686 ?        I<     0:00 [kworker/R-kdmfl]
+-    694 ?        I<     0:00 [kworker/R-kcryp]
+-    695 ?        I<     0:00 [kworker/R-kcryp]
+-    696 ?        S      0:00 [dmcrypt_write/252:0]
+-    791 ?        I<     0:00 [kworker/R-ktpac]
+-    886 ?        I<     0:00 [kworker/R-cfg80]
+-    945 ?        S      0:15 [irq/68-rtw89_pci]
+-    996 ?        I<     0:00 [kworker/R-amdgp]
+-   1092 ?        Ss     0:01 /usr/lib/systemd/systemd-oomd
+-   1093 ?        I<     0:00 [kworker/R-ttm]
+-   1116 ?        Ss     0:00 /usr/lib/systemd/systemd-resolved
+-   1119 ?        Ssl    0:00 /usr/lib/systemd/systemd-timesyncd
+-   1205 ?        Ssl    0:00 /usr/libexec/accounts-daemon
+-   1206 ?        Ss     0:00 /usr/sbin/acpid
+-   1209 ?        Ss     0:00 avahi-daemon: running [lappy.local]
+-   1210 ?        Ss     0:00 /usr/libexec/bluetooth/bluetoothd
+-   1211 ?        Ss     0:00 /usr/sbin/cron -f -P
+-   1212 ?        Ss     0:01 @dbus-daemon --system --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
+-   1215 ?        Ssl    0:00 /usr/libexec/gnome-remote-desktop-daemon --system
+-   1218 ?        Ss     0:00 /usr/bin/python3 /usr/bin/networkd-dispatcher --run-startup-triggers
+-   1220 ?        Ssl    0:00 /usr/lib/polkit-1/polkitd --no-debug
+-   1222 ?        Ssl    0:00 /usr/libexec/power-profiles-daemon
+-   1231 ?        Ssl    0:01 /usr/lib/snapd/snapd
+-   1233 ?        Ssl    0:00 /usr/libexec/switcheroo-control
+-   1237 ?        Ss     0:00 /usr/lib/systemd/systemd-logind
+-   1241 ?        Ssl    0:00 /usr/libexec/udisks2/udisksd
+-   1244 ?        S      0:00 avahi-daemon: chroot helper
+-   1279 ?        Ssl    0:01 /usr/sbin/NetworkManager --no-daemon
+-   1280 ?        Ss     0:01 /usr/sbin/wpa_supplicant -u -s -O DIR=/run/wpa_supplicant GROUP=netdev
+-   1327 ?        Ssl    0:00 /usr/sbin/rsyslogd -n -iNONE
+-   1364 ?        Ssl    0:00 /usr/sbin/ModemManager
+-   1469 ?        I<     0:00 [kworker/R-amdgp]
+-   1470 ?        I<     0:00 [kworker/R-amdgp]
+-   1471 ?        I<     0:00 [kworker/R-amdgp]
+-   1472 ?        I<     0:00 [kworker/R-dm_vb]
+-   1474 ?        S      0:00 [card1-crtc0]
+-   1475 ?        S      0:00 [card1-crtc1]
+-   1476 ?        S      0:00 [card1-crtc2]
+-   1477 ?        S      0:00 [card1-crtc3]
+-   1637 ?        Ss     0:00 /usr/sbin/cupsd -l
+-   1641 ?        Ssl    0:00 /snap/canonical-livepatch/286/canonical-livepatchd
+-   1643 ?        Ss     0:00 /bin/sh /snap/cups/1067/scripts/run-cups-browsed
+-   1645 ?        Ss     0:00 /bin/sh /snap/cups/1067/scripts/run-cupsd
+-   1648 ?        Ssl    0:00 /usr/bin/python3 /usr/share/unattended-upgrades/unattended-upgrade-shutdown --wait-for-signal
+-   1735 ?        S      0:00 /usr/lib/cups/notifier/dbus dbus://
+-   1772 ?        Ssl    0:00 /usr/sbin/gdm3
+-   1809 ?        S      0:00 [psimon]
+-   1915 ?        SNsl   0:00 /usr/libexec/rtkit-daemon
+-   1935 ?        S      0:00 cupsd -f -s /var/snap/cups/common/etc/cups/cups-files.conf -c /var/snap/cups/common/etc/cups/cupsd.conf
+-   2012 ?        S<     0:00 [krfcommd]
+-   2058 ?        Ssl    0:00 /usr/libexec/colord
+-   2084 ?        S      0:00 /bin/sh /snap/cups/1067/scripts/run-cups-browsed
+-   2085 ?        S      0:00 sleep 3600
+-   2186 ?        Ssl    0:00 /usr/libexec/upowerd
+-   2557 ?        Ssl    0:00 /usr/sbin/cups-browsed
+-   2567 ?        Ss     0:00 /usr/sbin/kerneloops --test
+-   2572 ?        Ss     0:00 /usr/sbin/kerneloops
+-   2596 ?        Ss     0:00 /usr/sbin/nmbd --foreground --no-process-group
+-   2896 ?        Ss     0:00 /usr/lib/postfix/sbin/master -w
+-   2898 ?        S      0:00 qmgr -l -t unix -u
+-   2919 ?        Ss     0:00 /usr/sbin/smbd --foreground --no-process-group
+-   2923 ?        S      0:00 smbd: notifyd .
+-   2924 ?        S      0:00 smbd: cleanupd 
+-   2927 ?        I      0:00 [kworker/5:3-mm_percpu_wq]
+-   2997 ?        Sl     0:00 gdm-session-worker [pam/gdm-password]
+-   3014 ?        Ss     0:01 /usr/lib/systemd/systemd --user
+-   3022 ?        S      0:00 (sd-pam)
+-   3033 ?        S<sl   0:01 /usr/bin/pipewire
+-   3034 ?        Ssl    0:00 /usr/bin/pipewire -c filter-chain.conf
+-   3039 ?        S<sl   0:00 /usr/bin/wireplumber
+-   3040 ?        S<sl   0:01 /usr/bin/pipewire-pulse
+-   3044 ?        SLsl   0:00 /usr/bin/gnome-keyring-daemon --foreground --components=pkcs11,secrets --control-directory=/run/user/1000/keyring
+-   3052 ?        Ss     0:01 /usr/bin/dbus-daemon --session --address=systemd: --nofork --nopidfile --systemd-activation --syslog-only
+-   3074 ?        Ssl    0:00 /usr/libexec/xdg-document-portal
+-   3094 ?        Ssl    0:00 /usr/libexec/xdg-permission-store
+-   3102 ?        Ss     0:00 fusermount3 -o rw,nosuid,nodev,fsname=portal,auto_unmount,subtype=portal -- /run/user/1000/doc
+-   3149 tty2     Ssl+   0:00 /usr/libexec/gdm-wayland-session env GNOME_SHELL_SESSION_MODE=ubuntu /usr/bin/gnome-session --session=ubuntu
+-   3158 tty2     Sl+    0:00 /usr/libexec/gnome-session-binary --session=ubuntu
+-   3231 ?        Ssl    0:00 /usr/libexec/gcr-ssh-agent --base-dir /run/user/1000/gcr
+-   3235 ?        Ssl    0:00 /usr/libexec/gnome-session-ctl --monitor
+-   3249 ?        Ssl    0:00 /usr/libexec/gvfsd
+-   3258 ?        Sl     0:00 /usr/libexec/gvfsd-fuse /run/user/1000/gvfs -f
+-   3262 ?        Ssl    0:00 /usr/libexec/gnome-session-binary --systemd-service --session=ubuntu
+-   3296 ?        Ssl    2:15 /usr/bin/gnome-shell
+-   3299 ?        Sl     0:00 /usr/libexec/at-spi-bus-launcher --launch-immediately
+-   3310 ?        S      0:00 /usr/bin/dbus-daemon --config-file=/usr/share/defaults/at-spi2/accessibility.conf --nofork --print-address 11 --address=unix:path=/run/user/1000/at-spi/bus
+-   3398 ?        Sl     0:00 /usr/libexec/at-spi2-registryd --use-gnome-session
+-   3417 ?        Sl     0:00 /usr/libexec/gnome-shell-calendar-server
+-   3425 ?        Ssl    0:00 /usr/libexec/evolution-source-registry
+-   3428 ?        Ssl    0:00 /usr/libexec/dconf-service
+-   3439 ?        Sl     0:00 /usr/bin/gjs -m /usr/share/gnome-shell/org.gnome.Shell.Notifications
+-   3479 ?        Ssl    0:05 /usr/bin/ibus-daemon --panel disable
+-   3480 ?        Ssl    0:00 /usr/libexec/gsd-a11y-settings
+-   3481 ?        Ssl    0:00 /usr/libexec/gsd-color
+-   3482 ?        Ssl    0:00 /usr/libexec/gsd-datetime
+-   3485 ?        Ssl    0:00 /usr/libexec/gsd-housekeeping
+-   3487 ?        Ssl    0:00 /usr/libexec/gsd-keyboard
+-   3488 ?        Ssl    0:00 /usr/libexec/gsd-media-keys
+-   3491 ?        Ssl    0:00 /usr/libexec/gsd-power
+-   3493 ?        Ssl    0:00 /usr/libexec/gsd-print-notifications
+-   3498 ?        Ssl    0:00 /usr/libexec/gsd-rfkill
+-   3500 ?        Ssl    0:00 /usr/libexec/gsd-screensaver-proxy
+-   3504 ?        Ssl    0:00 /usr/libexec/gsd-sharing
+-   3507 ?        Ssl    0:00 /usr/libexec/gsd-smartcard
+-   3520 ?        Ssl    0:00 /usr/libexec/gsd-sound
+-   3546 ?        Ssl    0:00 /usr/libexec/gsd-wacom
+-   3551 ?        Sl     0:00 /usr/libexec/gsd-disk-utility-notify
+-   3579 ?        Ssl    0:00 /usr/libexec/gvfs-udisks2-volume-monitor
+-   3585 ?        Sl     0:00 /usr/libexec/evolution-data-server/evolution-alarm-notify
+-   3633 ?        Sl     0:00 /usr/libexec/ibus-memconf
+-   3636 ?        Sl     0:02 /usr/libexec/ibus-extension-gtk3
+-   3652 ?        Sl     0:00 /usr/libexec/ibus-portal
+-   3665 ?        Sl     0:00 /usr/libexec/goa-daemon
+-   3667 ?        Sl     0:03 /snap/snap-store/1216/usr/bin/snap-store --gapplication-service
+-   3723 ?        Sl     0:00 /usr/libexec/goa-identity-service
+-   3738 ?        Sl     0:00 /usr/libexec/gsd-printer
+-   3743 ?        Ssl    0:00 /usr/libexec/evolution-calendar-factory
+-   3750 ?        Ssl    0:00 /usr/libexec/gvfs-goa-volume-monitor
+-   3757 ?        Ssl    0:00 /usr/libexec/gvfs-mtp-volume-monitor
+-   3781 ?        Ssl    0:00 /usr/libexec/gvfs-afc-volume-monitor
+-   3797 ?        Ssl    0:00 /usr/libexec/gvfs-gphoto2-volume-monitor
+-   3816 ?        Ssl    0:00 /usr/libexec/evolution-addressbook-factory
+-   3974 ?        Sl     0:01 /usr/libexec/ibus-engine-simple
+-   4034 ?        Sl     0:00 /usr/libexec/gvfsd-trash --spawner :1.20 /org/gtk/gvfs/exec_spaw/0
+-   4073 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal
+-   4077 ?        SNsl   0:00 /usr/libexec/tracker-miner-fs-3
+-   4083 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal-gnome
+-   4105 ?        Sl     0:00 /usr/bin/gjs -m /usr/share/gnome-shell/org.gnome.ScreenSaver
+-   4136 ?        Ssl    0:00 /usr/libexec/xdg-desktop-portal-gtk
+-   4167 ?        Ss     0:00 /snap/snapd-desktop-integration/253/usr/bin/snapd-desktop-integration
+-   4256 ?        Ssl    0:01 /usr/libexec/fwupd/fwupd
+-   4290 ?        Sl     0:00 /snap/snapd-desktop-integration/253/usr/bin/snapd-desktop-integration
+-   4309 ?        Ssl    0:00 /usr/libexec/gvfsd-metadata
+-   4792 ?        Sl     0:00 /usr/bin/gnome-calendar --gapplication-service
+-   5050 ?        I      0:00 [kworker/1:2-mm_percpu_wq]
+-   5055 ?        I      0:00 [kworker/1:3-events]
+-   5131 ?        S      0:00 /usr/bin/ssh-agent -D -a /run/user/1000/keyring/.ssh
+-   5578 ?        Sl     0:00 /usr/bin/snap userd
+-   5995 ?        Sl     0:00 /usr/bin/update-notifier
+-   6028 ?        S      0:00 tlsmgr -l -t unix -u -c
+-   6276 ?        I      0:00 [kworker/13:2-mm_percpu_wq]
+-   6331 ?        I      0:06 [kworker/u32:7-iou_exit]
+-   6537 ?        I      0:00 [kworker/6:3-mm_percpu_wq]
+-   6790 ?        SLl    0:57 /opt/google/chrome/chrome
+-   6796 ?        S      0:00 cat
+-   6797 ?        S      0:00 cat
+-   6799 ?        Sl     0:00 /opt/google/chrome/chrome_crashpad_handler --monitor-self --monitor-self-annotation=ptype=crashpad-handler --database=/home/flatmax/.config/google-chrome/Crash Reports --url=https://clients2.google.com/cr/report --annotation=channel= --annotation=lsb-release=Ubuntu 24.04.1 LTS --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=131.0.6778.69 --initial-client-fd=5 --shared-client-connection
+-   6801 ?        Sl     0:00 /opt/google/chrome/chrome_crashpad_handler --no-periodic-tasks --monitor-self-annotation=ptype=crashpad-handler --database=/home/flatmax/.config/google-chrome/Crash Reports --url=https://clients2.google.com/cr/report --annotation=channel= --annotation=lsb-release=Ubuntu 24.04.1 LTS --annotation=plat=Linux --annotation=prod=Chrome_Linux --annotation=ver=131.0.6778.69 --initial-client-fd=4 --shared-client-connection
+-   6807 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --no-zygote-sandbox --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
+-   6808 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
+-   6810 ?        S      0:00 /opt/google/chrome/chrome --type=zygote --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable
+-   6821 ?        Sl     0:49 /usr/bin/Xwayland :0 -rootless -noreset -accessx -core -auth /run/user/1000/.mutter-Xwaylandauth.6MI1W2 -listenfd 4 -listenfd 5 -displayfd 6 -initfd 7 -byteswappedclients
+-   6841 ?        Ssl    0:00 /usr/libexec/gsd-xsettings
+-   6871 ?        Sl     0:00 /usr/libexec/ibus-x11
+-   6877 ?        Sl     0:02 /usr/libexec/mutter-x11-frames
+-   6906 ?        Sl     1:13 /opt/google/chrome/chrome --type=gpu-process --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --gpu-preferences=UAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAEAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAA --use-gl=angle --use-angle=swiftshader-webgl --shared-files --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   6917 ?        Sl     0:20 /opt/google/chrome/chrome --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   6929 ?        Sl     0:00 /opt/google/chrome/chrome --type=utility --utility-sub-type=storage.mojom.StorageService --lang=en-GB --service-sandbox-type=utility --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7086 ?        Sl     0:41 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=8 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=454616823 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7159 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=12 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=455460891 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7174 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=13 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=457365553 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7208 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=15 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=459268011 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7317 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=23 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=466582259 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7342 ?        Sl     0:29 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=24 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=468043530 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   7414 ?        Sl     0:00 /opt/google/chrome/chrome --type=utility --utility-sub-type=audio.mojom.AudioService --lang=en-GB --service-sandbox-type=none --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   8529 ?        I      0:00 [kworker/10:1-events]
+-   8781 ?        Sl     0:04 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=60 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=867460172 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   8816 ?        I      0:00 [kworker/7:2-mm_percpu_wq]
+-   9169 ?        I      0:00 [kworker/9:1-events]
+-   9264 ?        I      0:03 [kworker/u32:13-iou_exit]
+-   9281 ?        I      0:00 [kworker/0:2-events]
+-   9301 ?        S      0:00 pickup -l -t unix -u -c
+-   9306 ?        Ssl    0:00 /snap/firmware-updater/147/bin/firmware-notifier
+-   9520 ?        Ssl    0:00 /usr/bin/rygel
+-   9596 ?        Sl     0:00 gjs /usr/share/gnome-shell/extensions/ding@rastersoft.com/app/ding.js -E -P /usr/share/gnome-shell/extensions/ding@rastersoft.com/app
+-   9796 ?        Sl     0:03 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=84 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=1196406048 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-   9809 ?        S      0:00 /usr/bin/python3 /usr/bin/gnome-terminal --wait
+-   9812 ?        Sl     0:00 /usr/bin/gnome-terminal.real --wait
+-   9818 ?        Ssl    0:02 /usr/libexec/gnome-terminal-server
+-   9826 pts/0    Ss     0:00 bash
+-  10968 ?        SLsl   0:23 /usr/share/windsurf/windsurf
+-  10971 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote --no-zygote-sandbox
+-  10972 ?        S      0:00 /usr/share/windsurf/chrome-sandbox /usr/share/windsurf/windsurf --type=zygote
+-  10973 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote
+-  10975 ?        S      0:00 /usr/share/windsurf/windsurf --type=zygote
+-  11008 ?        Sl     1:46 /usr/share/windsurf/windsurf --type=gpu-process --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --gpu-preferences=WAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAEAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAGAAAAAAAAAAYAAAAAAAAAAgAAAAAAAAACAAAAAAAAAAIAAAAAAAAAA== --shared-files --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  11015 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  11069 ?        Sl     1:26 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=4 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1299115622 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
+-  11096 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  11174 ?        Sl     0:25 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=8 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1302627380 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
+-  11219 ?        Sl     0:00 /usr/libexec/gvfsd-http --spawner :1.20 /org/gtk/gvfs/exec_spaw/1
+-  11260 ?        I<     0:00 [kworker/u33:2-rtw89_tx_wq]
+-  11461 ?        SLl    0:08 /opt/Signal/signal-desktop --no-sandbox
+-  11465 ?        S      0:00 /opt/Signal/signal-desktop --type=zygote --no-zygote-sandbox --no-sandbox
+-  11466 ?        S      0:00 /opt/Signal/signal-desktop --type=zygote --no-sandbox
+-  11760 ?        Sl     0:09 /opt/Signal/signal-desktop --type=gpu-process --no-sandbox --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --gpu-preferences=UAAAAAAAAAAgAAAEAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAABAAAAAAAAAAEAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAA --use-gl=angle --use-angle=swiftshader-webgl --shared-files --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
+-  11770 ?        Sl     0:00 /opt/Signal/signal-desktop --type=utility --utility-sub-type=network.mojom.NetworkService --lang=en-GB --service-sandbox-type=none --no-sandbox --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --fetch-schemes=attachment --streaming-schemes=attachment --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
+-  11825 ?        Sl     0:28 /opt/Signal/signal-desktop --type=renderer --enable-crash-reporter=fd8d5890-4b4d-47b0-9d28-ea713e852320,no_channel --user-data-dir=/home/flatmax/.config/Signal --fetch-schemes=attachment --streaming-schemes=attachment --app-path=/opt/Signal/resources/app.asar --no-sandbox --no-zygote --enable-blink-features=CSSPseudoDir,CSSLogical --disable-blink-features=Accelerated2dCanvas,AcceleratedSmallCanvases --no-sandbox --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=4 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1373146429 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,7910439390338684663,2855911427601114112,262144 --disable-features=HardwareMediaKeyHandling,SpareRendererForSitePerProcess --variations-seed-version
+-  12115 ?        I      0:03 [kworker/u32:0-iou_exit]
+-  12332 ?        I      0:03 [kworker/u32:1-gfx_high]
+-  12337 ?        Sl     0:00 npm start
+-  12353 ?        S      0:00 sh -c web-dev-server --node-resolve --open --watch
+-  12354 ?        Rl    19:32 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
+-  12416 ?        I      0:00 [kworker/4:0-events]
+-  12433 ?        Sl     0:00 /usr/libexec/gvfsd-network --spawner :1.20 /org/gtk/gvfs/exec_spaw/2
+-  12440 ?        Sl     0:00 /usr/libexec/gvfsd-smb-browse --spawner :1.20 /org/gtk/gvfs/exec_spaw/3
+-  12452 ?        I<     0:00 [kworker/u33:4-ttm]
+-  12455 ?        I<     0:00 [kworker/u33:7-rtw89_tx_wq]
+-  12466 ?        Sl     0:00 /usr/libexec/gvfsd-dnssd --spawner :1.20 /org/gtk/gvfs/exec_spaw/4
+-  12539 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  12549 ?        Sl     0:16 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --dns-result-order=ipv4first --inspect-port=0 --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  12577 ?        Sl     0:24 /usr/share/windsurf/resources/app/extensions/windsurf/bin/language_server_linux_x64 --api_server_url https://server.codeium.com --run_child --enable_lsp --extension_server_port 37599 --random_port --inference_api_server_url https://inference.codeium.com --detect_proxy=false --database_dir /home/flatmax/.codeium/windsurf/database/9c0694567290725d9dcba14ade58e297 --enable_index_service --enable_local_search --search_max_workspace_file_count 5000 --indexed_files_retention_period_days 30 --workspace_id file_home_flatmax_CascadeProjects_code_ai_iterator --sentry_telemetry --codeium_dir .codeium/windsurf --parent_pipe_path /tmp/server_27210325d5348f86
+-  12611 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/json-language-features/server/dist/node/jsonServerMain --node-ipc --clientProcessId=12549
+-  12621 ?        Sl     2:23 /usr/share/windsurf/windsurf --type=renderer --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --app-path=/usr/share/windsurf/resources/app --enable-sandbox --enable-blink-features=HighlightAPI --disable-blink-features=FontMatchingCTMigration, --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=11 --time-ticks-at-unix-epoch=-1732009468128228 --launch-time-ticks=1819892101 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version --vscode-window-config=vscode:237d3e52-2e24-4901-bd75-6c41d441f76a
+-  12665 ?        I      0:00 [kworker/11:2]
+-  12676 ?        Sl     0:02 /usr/share/windsurf/windsurf --max-old-space-size=3072 /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/tsserver.js --serverMode partialSemantic --useInferredProjectPerProjectRoot --disableAutomaticTypingAcquisition --cancellationPipeName /tmp/vscode-typescript1000/3a49723def8832862a2f/tscancellation-6315287ceef4c686180b.tmp* --locale en --noGetErrOnBackgroundUpdate --canUseWatchEvents --validateDefaultNpmLocation --useNodeIpc
+-  12677 ?        Sl     0:13 /usr/share/windsurf/windsurf --max-old-space-size=3072 /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/tsserver.js --useInferredProjectPerProjectRoot --enableTelemetry --cancellationPipeName /tmp/vscode-typescript1000/3a49723def8832862a2f/tscancellation-2c0d8e3198b445c8e81a.tmp* --locale en --noGetErrOnBackgroundUpdate --canUseWatchEvents --validateDefaultNpmLocation --useNodeIpc
+-  12692 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/html-language-features/server/dist/node/htmlServerMain --node-ipc --clientProcessId=12549
+-  12703 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/markdown-language-features/dist/serverWorkerMain --node-ipc --clientProcessId=12549
+-  12711 ?        Sl     0:00 /usr/share/windsurf/windsurf /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/typingsInstaller.js --globalTypingsCacheLocation /home/flatmax/.cache/typescript/5.6 --enableTelemetry --typesMapLocation /usr/share/windsurf/resources/app/extensions/node_modules/typescript/lib/typesMap.json --validateDefaultNpmLocation
+-  12743 ?        Sl     0:02 /usr/share/windsurf/windsurf --type=utility --utility-sub-type=node.mojom.NodeService --lang=en-GB --service-sandbox-type=none --enable-crash-reporter=e99bab64-b7a4-4697-8e2a-d6d5bca81206,no_channel --user-data-dir=/home/flatmax/.config/Windsurf --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --code-cache-schemes=vscode-webview,vscode-file --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,11771752965604858857,17073450646352099301,262144 --enable-features=kWebSQLAccess --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --variations-seed-version
+-  12759 pts/1    Ss     0:00 /usr/bin/bash --init-file /usr/share/windsurf/resources/app/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-bash.sh
+-  12778 pts/1    Sl+    0:02 npm run start
+-  12790 ?        Ssl    0:00 /usr/bin/node /usr/share/windsurf/resources/app/extensions/ms-vscode.js-debug/src/watchdog.js
+-  12820 pts/1    S+     0:00 sh -c web-dev-server --node-resolve --open --watch
+-  12821 pts/1    Sl+    0:02 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
+-  12833 ?        Ssl    0:00 /usr/bin/node /usr/share/windsurf/resources/app/extensions/ms-vscode.js-debug/src/watchdog.js
+-  12906 ?        I      0:00 [kworker/15:0]
+-  13469 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=100 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=2460382797 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-  13548 ?        I      0:00 [kworker/u32:2-events_unbound]
+-  13621 ?        I      0:00 [kworker/u32:3-iou_exit]
+-  13661 ?        I      0:00 [kworker/u32:4-iou_exit]
+-  13724 ?        I      0:00 [kworker/u32:5-gfx_low]
+-  13753 ?        I      0:00 [kworker/u32:6-iou_exit]
+-  13769 ?        I      0:00 [kworker/5:0-inet_frag_wq]
+-  13776 ?        I      0:00 [kworker/2:2-events]
+-  13779 ?        I      0:00 [kworker/12:1-cgroup_destroy]
+-  13780 ?        I      0:00 [kworker/6:0]
+-  13886 ?        Sl     0:00 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/concurrently npm run server npm run client
+-  13898 ?        S      0:00 /bin/sh -c npm run client
+-  13899 ?        Sl     0:00 npm run client
+-  13930 ?        S      0:00 sh -c web-dev-server --node-resolve --open --watch
+-  13931 ?        Sl     0:00 node /home/flatmax/CascadeProjects/code-ai-iterator/node_modules/.bin/web-dev-server --node-resolve --open --watch
+-  13992 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=107 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3093235894 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-  14007 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=108 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3101426843 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-  14030 ?        I<     0:00 [kworker/u33:0]
+-  14080 ?        I      0:00 [kworker/u32:8-events_unbound]
+-  14081 ?        I      0:00 [kworker/u32:9-events_unbound]
+-  14082 ?        I      0:00 [kworker/u32:10-events_power_efficient]
+-  14083 ?        I      0:00 [kworker/u32:11-gfx_low]
+-  14084 ?        I      0:00 [kworker/u32:12-gfx_low]
+-  14085 ?        I      0:00 [kworker/u32:14]
+-  14088 ?        Sl     0:00 /opt/google/chrome/chrome --type=renderer --string-annotations --crashpad-handler-pid=6799 --enable-crash-reporter=, --extension-process --change-stack-guard-on-fork=enable --disable-gpu-compositing --lang=en-GB --num-raster-threads=4 --enable-main-frame-before-activation --renderer-client-id=110 --time-ticks-at-unix-epoch=-1732008195164868 --launch-time-ticks=3206081556 --shared-files=v8_context_snapshot_data:100 --field-trial-handle=3,i,10681555011575150215,7480798901071965268,262144 --disable-features=EyeDropper --variations-seed-version=20241118-164138.616000
+-  14122 pts/0    R+     0:00 ps ax
+-  14123 pts/0    S+     0:00 less
++# Code AI Iterator
++
++A web-based file explorer with split-pane editor functionality built using LitElement and web components.
++
++## Setup
++
++1. Install dependencies:
++```bash
++npm install
++```
++
++2. Start the development server:
++```bash
++npm start
++```
++
++## Features
++
++- File explorer panel
++- Split-pane editor interface
++- Modern web component architecture using LitElement
++
++## Development
++
++The project uses:
++- LitElement for web components
++- Split.js for the split pane functionality
++- Material Web Components for UI elements
