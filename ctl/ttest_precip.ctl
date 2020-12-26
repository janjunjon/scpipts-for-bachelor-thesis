dset ^precip_ttest.bin
*undef -9.99e+08
undef -999
title test
XDEF 1440 LINEAR    0.125 0.25
YDEF 480 LINEAR  -59.875 0.25
zdef 1 linear 0 1
tdef 1 linear 26may2000 1dy
vars 1
ttest 0 99 5%有意
endvars
