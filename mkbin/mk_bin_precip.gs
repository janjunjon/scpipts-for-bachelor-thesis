'open ../GSMaP_NRT.daily_G.00Z-23Z_2000.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2001.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2002.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2003.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2004.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2005.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2006.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2007.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2008.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2009.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2010.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2011.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2012.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2013.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2014.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2015.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2016.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2017.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2018.ctl'
'open ../GSMaP_NRT.daily_G.00Z-23Z_2019.ctl'


'set gxout fwrite'
'set undef dfile'
'set fwrite precip_2000_2019.grd'

'set x 1 1440'
'set y 1 480'

t=1
while(t<=53)
'set t 't
'd precip*24'
t=t+1
endwhile

t=1
'set dfile 2'
while(t<=60)
'set t 't
'd precip.2*24'
t=t+1
endwhile

t=1
'set dfile 3'
while(t<=42)
'set t 't
'd precip.3*24'
t=t+1
endwhile

t=1
'set dfile 4'
while(t<=53)
'set t 't
'd precip.4*24'
t=t+1
endwhile

t=1
'set dfile 5'
while(t<=44)
'set t 't
'd precip.5*24'
t=t+1
endwhile

t=1
'set dfile 6'
while(t<=38)
'set t 't
'd precip.6*24'
t=t+1
endwhile

t=1
'set dfile 7'
while(t<=49)
'set t 't
'd precip.7*24'
t=t+1
endwhile

t=1
'set dfile 8'
while(t<=41)
'set t 't
'd precip.8*24'
t=t+1
endwhile

t=1
'set dfile 9'
while(t<=40)
'set t 't
'd precip.9*24'
t=t+1
endwhile

t=1
'set dfile 10'
while(t<=63)
'set t 't
'd precip.10*24'
t=t+1
endwhile

t=1
'set dfile 11'
while(t<=36)
'set t 't
'd precip.11*24'
t=t+1
endwhile

t=1
'set dfile 12'
while(t<=49)
'set t 't
'd precip.12*24'
t=t+1
endwhile

t=1

'set dfile 13'
while(t<=55)
'set t 't
'd precip.13*24'
t=t+1
endwhile

t=1

'set dfile 14'
while(t<=43)
'set t 't
'd precip.14*24'
t=t+1
endwhile

t=1

'set dfile 15'
while(t<=49)
'set t 't
'd precip.15*24'
t=t+1
endwhile

t=1
'set dfile 16'
while(t<=58)
'set t 't
'd precip.16*24'
t=t+1
endwhile

t=1
'set dfile 17'
while(t<=45)
'set t 't
'd precip.17*24'
t=t+1
endwhile

t=1
'set dfile 18'
while(t<=24)
'set t 't
'd precip.18*24'
t=t+1
endwhile

t=1
'set dfile 19'
while(t<=35)
'set t 't
'd precip.19*24'
t=t+1
endwhile

t=1

'set dfile 20'
while(t<=30)
'set t 't
'd precip.20*24'
t=t+1
endwhile

'disable fwrite'