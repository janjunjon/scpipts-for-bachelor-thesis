'sdfopen JRA_data/2000/anl_surf125.001_pres.200005.nc'
'sdfopen JRA_data/2000/anl_surf125.001_pres.200006.nc'
'sdfopen JRA_data/2000/anl_surf125.001_pres.200007.nc'
'sdfopen JRA_data/2001/anl_surf125.001_pres.200105.nc'
'sdfopen JRA_data/2001/anl_surf125.001_pres.200106.nc'
'sdfopen JRA_data/2001/anl_surf125.001_pres.200107.nc'
'sdfopen JRA_data/2002/anl_surf125.001_pres.200206.nc'
'sdfopen JRA_data/2002/anl_surf125.001_pres.200207.nc'
'sdfopen JRA_data/2003/anl_surf125.001_pres.200306.nc'
'sdfopen JRA_data/2003/anl_surf125.001_pres.200307.nc'
'sdfopen JRA_data/2004/anl_surf125.001_pres.200405.nc'
'sdfopen JRA_data/2004/anl_surf125.001_pres.200406.nc'
'sdfopen JRA_data/2004/anl_surf125.001_pres.200407.nc'
'sdfopen JRA_data/2005/anl_surf125.001_pres.200506.nc'
'sdfopen JRA_data/2005/anl_surf125.001_pres.200507.nc'
'sdfopen JRA_data/2006/anl_surf125.001_pres.200606.nc'
'sdfopen JRA_data/2006/anl_surf125.001_pres.200607.nc'
'sdfopen JRA_data/2007/anl_surf125.001_pres.200706.nc'
'sdfopen JRA_data/2007/anl_surf125.001_pres.200707.nc'
'sdfopen JRA_data/2008/anl_surf125.001_pres.200805.nc'
'sdfopen JRA_data/2008/anl_surf125.001_pres.200806.nc'
'sdfopen JRA_data/2008/anl_surf125.001_pres.200807.nc'
'sdfopen JRA_data/2009/anl_surf125.001_pres.200906.nc'
'sdfopen JRA_data/2009/anl_surf125.001_pres.200907.nc'
'sdfopen JRA_data/2009/anl_surf125.001_pres.200908.nc'
'sdfopen JRA_data/2010/anl_surf125.001_pres.201006.nc'
'sdfopen JRA_data/2010/anl_surf125.001_pres.201007.nc'
'sdfopen JRA_data/2011/anl_surf125.001_pres.201105.nc'
'sdfopen JRA_data/2011/anl_surf125.001_pres.201106.nc'
'sdfopen JRA_data/2011/anl_surf125.001_pres.201107.nc'
'sdfopen JRA_data/2012/anl_surf125.001_pres.201205.nc'
'sdfopen JRA_data/2012/anl_surf125.001_pres.201206.nc'
'sdfopen JRA_data/2012/anl_surf125.001_pres.201207.nc'
'sdfopen JRA_data/2013/anl_surf125.001_pres.201305.nc'
'sdfopen JRA_data/2013/anl_surf125.001_pres.201306.nc'
'sdfopen JRA_data/2013/anl_surf125.001_pres.201307.nc'
'sdfopen JRA_data/2014/anl_surf125.001_pres.201406.nc'
'sdfopen JRA_data/2014/anl_surf125.001_pres.201407.nc'
'sdfopen JRA_data/2015/anl_surf125.001_pres.201506.nc'
'sdfopen JRA_data/2015/anl_surf125.001_pres.201507.nc'
'sdfopen JRA_data/2016/anl_surf125.001_pres.201606.nc'
'sdfopen JRA_data/2016/anl_surf125.001_pres.201607.nc'
'sdfopen JRA_data/2017/anl_surf125.001_pres.201706.nc'
'sdfopen JRA_data/2017/anl_surf125.001_pres.201707.nc'
'sdfopen JRA_data/2018/anl_surf125.001_pres.201806.nc'
'sdfopen JRA_data/2018/anl_surf125.001_pres.201807.nc'
'sdfopen JRA_data/2019/anl_surf125.001_pres.201906.nc'
'sdfopen JRA_data/2019/anl_surf125.001_pres.201907.nc'

filename=pres.grd
endint1=25
endint2=120
endint3=67
endint4=45
endint5=120
endint6=75
endint7=85
endint8=83
endint9=89
endint10=123
endint11=13
endint12=120
endint13=43
endint14=85
endint15=67
endint16=93
endint17=103
endint18=73
endint19=91
endint20=17
endint21=120
endint22=23
endint23=113
endint24=124
endint25=15
endint26=77
endint27=67
endint28=45
endint29=120
endint30=31
endint31=9
endint32=120
endint33=91
endint34=21
endint35=120
endint36=31
endint37=117
endint38=79
endint39=117
endint40=115
endint41=109
endint42=71
endint43=45
endint44=51
endint45=105
endint46=35
endint47=21
endint48=99

'set gxout fwrite'
'set undef dfile'
'set fwrite JRA_data/'filename

'set x 1 288'
'set y 1 145'

*'set x 1'
*'set y 1'

t=1
while(t<=endint1)
'd pres_gds0_sfc(t='t')'
*say result
t=t+1
endwhile

i=2
t=1
while(t<=endint2)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=3
t=1
while(t<=endint3)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=4
t=1
while(t<=endint4)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=5
t=1
while(t<=endint5)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=6
t=1
while(t<=endint6)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=7
t=1
while(t<=endint7)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=8
t=1
while(t<=endint8)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=9
t=1
while(t<=endint9)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=10
t=1
while(t<=endint10)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=11
t=1
while(t<=endint11)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=12
t=1
while(t<=endint12)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=13
t=1
while(t<=endint13)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=14
t=1
while(t<=endint14)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=15
t=1
while(t<=endint15)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=16
t=1
while(t<=endint16)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=17
t=1
while(t<=endint17)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=18
t=1
while(t<=endint18)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=19
t=1
while(t<=endint19)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=20
t=1
while(t<=endint20)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=21
t=1
while(t<=endint21)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=22
t=1
while(t<=endint22)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=23
t=1
while(t<=endint23)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=24
t=1
while(t<=endint24)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=25
t=1
while(t<=endint25)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=26
t=1
while(t<=endint26)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=27
t=1
while(t<=endint27)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=28
t=1
while(t<=endint28)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=29
t=1
while(t<=endint29)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=30
t=1
while(t<=endint30)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=31
t=1
while(t<=endint31)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=32
t=1
while(t<=endint32)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=33
t=1
while(t<=endint33)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=34
t=1
while(t<=endint34)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=35
t=1
while(t<=endint35)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=36
t=1
while(t<=endint36)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=37
t=1
while(t<=endint37)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=38
t=1
while(t<=endint38)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=39
t=1
while(t<=endint39)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=40
t=1
while(t<=endint40)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=41
t=1
while(t<=endint41)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=41
t=1
while(t<=endint41)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=42
t=1
while(t<=endint42)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=43
t=1
while(t<=endint43)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=44
t=1
while(t<=endint44)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=45
t=1
while(t<=endint45)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=46
t=1
while(t<=endint46)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=47
t=1
while(t<=endint47)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

i=48
t=1
while(t<=endint48)
'd pres_gds0_sfc.'i'(t='t')'
*say result
t=t+1
endwhile

'disable fwrite'