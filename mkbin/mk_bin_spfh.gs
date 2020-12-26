'sdfopen JRA_data/2000/anl_p125.051_spfh.200005.nc'
'sdfopen JRA_data/2000/anl_p125.051_spfh.200006.nc'
'sdfopen JRA_data/2000/anl_p125.051_spfh.200007.nc'
'sdfopen JRA_data/2001/anl_p125.051_spfh.200105.nc'
'sdfopen JRA_data/2001/anl_p125.051_spfh.200106.nc'
'sdfopen JRA_data/2001/anl_p125.051_spfh.200107.nc'
'sdfopen JRA_data/2002/anl_p125.051_spfh.200206.nc'
'sdfopen JRA_data/2002/anl_p125.051_spfh.200207.nc'
'sdfopen JRA_data/2003/anl_p125.051_spfh.200306.nc'
'sdfopen JRA_data/2003/anl_p125.051_spfh.200307.nc'
'sdfopen JRA_data/2004/anl_p125.051_spfh.200405.nc'
'sdfopen JRA_data/2004/anl_p125.051_spfh.200406.nc'
'sdfopen JRA_data/2004/anl_p125.051_spfh.200407.nc'
'sdfopen JRA_data/2005/anl_p125.051_spfh.200506.nc'
'sdfopen JRA_data/2005/anl_p125.051_spfh.200507.nc'
'sdfopen JRA_data/2006/anl_p125.051_spfh.200606.nc'
'sdfopen JRA_data/2006/anl_p125.051_spfh.200607.nc'
'sdfopen JRA_data/2007/anl_p125.051_spfh.200706.nc'
'sdfopen JRA_data/2007/anl_p125.051_spfh.200707.nc'
'sdfopen JRA_data/2008/anl_p125.051_spfh.200805.nc'
'sdfopen JRA_data/2008/anl_p125.051_spfh.200806.nc'
'sdfopen JRA_data/2008/anl_p125.051_spfh.200807.nc'
'sdfopen JRA_data/2009/anl_p125.051_spfh.200906.nc'
'sdfopen JRA_data/2009/anl_p125.051_spfh.200907.nc'
'sdfopen JRA_data/2009/anl_p125.051_spfh.200908.nc'
'sdfopen JRA_data/2010/anl_p125.051_spfh.201006.nc'
'sdfopen JRA_data/2010/anl_p125.051_spfh.201007.nc'
'sdfopen JRA_data/2011/anl_p125.051_spfh.201105.nc'
'sdfopen JRA_data/2011/anl_p125.051_spfh.201106.nc'
'sdfopen JRA_data/2011/anl_p125.051_spfh.201107.nc'
'sdfopen JRA_data/2012/anl_p125.051_spfh.201205.nc'
'sdfopen JRA_data/2012/anl_p125.051_spfh.201206.nc'
'sdfopen JRA_data/2012/anl_p125.051_spfh.201207.nc'
'sdfopen JRA_data/2013/anl_p125.051_spfh.201305.nc'
'sdfopen JRA_data/2013/anl_p125.051_spfh.201306.nc'
'sdfopen JRA_data/2013/anl_p125.051_spfh.201307.nc'
'sdfopen JRA_data/2014/anl_p125.051_spfh.201406.nc'
'sdfopen JRA_data/2014/anl_p125.051_spfh.201407.nc'
'sdfopen JRA_data/2015/anl_p125.051_spfh.201506.nc'
'sdfopen JRA_data/2015/anl_p125.051_spfh.201507.nc'
'sdfopen JRA_data/2016/anl_p125.051_spfh.201606.nc'
'sdfopen JRA_data/2016/anl_p125.051_spfh.201607.nc'
'sdfopen JRA_data/2017/anl_p125.051_spfh.201706.nc'
'sdfopen JRA_data/2017/anl_p125.051_spfh.201707.nc'
'sdfopen JRA_data/2018/anl_p125.051_spfh.201806.nc'
'sdfopen JRA_data/2018/anl_p125.051_spfh.201807.nc'
'sdfopen JRA_data/2019/anl_p125.051_spfh.201906.nc'
'sdfopen JRA_data/2019/anl_p125.051_spfh.201907.nc'

filename=spfh.grd
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
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=2
t=1
while(t<=endint2)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=3
t=1
while(t<=endint3)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=4
t=1
while(t<=endint4)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=5
t=1
while(t<=endint5)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=6
t=1
while(t<=endint6)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=7
t=1
while(t<=endint7)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=8
t=1
while(t<=endint8)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=9
t=1
while(t<=endint9)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=10
t=1
while(t<=endint10)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=11
t=1
while(t<=endint11)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=12
t=1
while(t<=endint12)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=13
t=1
while(t<=endint13)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=14
t=1
while(t<=endint14)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=15
t=1
while(t<=endint15)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=16
t=1
while(t<=endint16)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=17
t=1
while(t<=endint17)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=18
t=1
while(t<=endint18)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=19
t=1
while(t<=endint19)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=20
t=1
while(t<=endint20)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=21
t=1
while(t<=endint21)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=22
t=1
while(t<=endint22)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=23
t=1
while(t<=endint23)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=24
t=1
while(t<=endint24)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=25
t=1
while(t<=endint25)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=26
t=1
while(t<=endint26)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=27
t=1
while(t<=endint27)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=28
t=1
while(t<=endint28)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=29
t=1
while(t<=endint29)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=30
t=1
while(t<=endint30)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=31
t=1
while(t<=endint31)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=32
t=1
while(t<=endint32)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=33
t=1
while(t<=endint33)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=34
t=1
while(t<=endint34)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=35
t=1
while(t<=endint35)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=36
t=1
while(t<=endint36)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=37
t=1
while(t<=endint37)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=38
t=1
while(t<=endint38)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=39
t=1
while(t<=endint39)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=40
t=1
while(t<=endint40)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=41
t=1
while(t<=endint41)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=41
t=1
while(t<=endint41)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=42
t=1
while(t<=endint42)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=43
t=1
while(t<=endint43)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=44
t=1
while(t<=endint44)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=45
t=1
while(t<=endint45)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=46
t=1
while(t<=endint46)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=47
t=1
while(t<=endint47)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

i=48
t=1
while(t<=endint48)
z=1
while(z<=27)
'set z 'z
*say result
'd spfh_gds0_isbl.'i'(t='t')'
*say result
z=z+1
endwhile
t=t+1
endwhile

'disable fwrite'