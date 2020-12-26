dset ^sst_ttest.bin
*undef -9.99e+08
undef -999
title ttest
XDEF 360 LINEAR    0.5 1
YDEF 180 LINEAR  -89.5 1
zdef 1 linear 0 1
tdef 1 linear 26may2000 1dy
vars 1
ttest 0 t,y,x 5%有意
endvars