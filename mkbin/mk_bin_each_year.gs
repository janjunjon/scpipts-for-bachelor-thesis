'sdfopen JRA_data/2000/anl_p125.033_ugrd.200005.nc'
'sdfopen JRA_data/2000/anl_p125.034_vgrd.200005.nc'
'sdfopen JRA_data/2000/anl_p125.011_tmp.200005.nc'
'sdfopen JRA_data/2000/anl_p125.052_rh.200005.nc'
'sdfopen JRA_data/2000/anl_surf125.001_pres.200005.nc'

startint=1
endint=25
filename='2000/each_height_200005.grd'

'set gxout fwrite'
'set undef dfile'
'set fwrite JRA_data/'filename

'set x 1 288'
'set y 1 145'

t=startint
while(t<=endint)
'set t 't

'set lev 1000'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/1000))/(1-0.378*(e/1000))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-987.5,pres_gds0_sfc.5(z=1)/100-987.5),0,-u)'
'w1000=q*x*100'
'qu1000=ugrd_gds0_isbl*w1000'
'qv1000=vgrd_gds0_isbl.2*w1000'
'a1000=hdivg(qu1000,qv1000)'
'd w1000/9.81'
'd qu1000/9.81'
'd qv1000/9.81'
'd a1000/9.81*60*60*6'

'set lev 975'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/975))/(1-0.378*(e/975))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-962.5,987.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-962.5),0,-u)'
'w975=q*x*100'
'qu975=ugrd_gds0_isbl*w975'
'qv975=vgrd_gds0_isbl.2*w975'
'a975=hdivg(qu975,qv975)'
'd w975/9.81'
'd qu975/9.81'
'd qv975/9.81'
'd a975/9.81*60*60*6'

'set lev 950'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/950))/(1-0.378*(e/950))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-937.5,962.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-937.5),0,-u)'
'w950=q*x*100'
'qu950=ugrd_gds0_isbl*w950'
'qv950=vgrd_gds0_isbl.2*w950'
'a950=hdivg(qu950,qv950)'
'd w950/9.81'
'd qu950/9.81'
'd qv950/9.81'
'd a950/9.81*60*60*6'

'set lev 925'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/925))/(1-0.378*(e/925))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-912.5,937.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-912.5),0,-u)'
'w925=q*x*100'
'qu925=ugrd_gds0_isbl*w925'
'qv925=vgrd_gds0_isbl.2*w925'
'a925=hdivg(qu925,qv925)'
'd w925/9.81'
'd qu925/9.81'
'd qv925/9.81'
'd a925/9.81*60*60*6'

'set lev 900'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/900))/(1-0.378*(e/900))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-887.5,912.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-887.5),0,-u)'
'w900=q*x*100'
'qu900=ugrd_gds0_isbl*w900'
'qv900=vgrd_gds0_isbl.2*w900'
'a900=hdivg(qu900,qv900)'
'd w900/9.81'
'd qu900/9.81'
'd qv900/9.81'
'd a900/9.81*60*60*6'

'set lev 875'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/875))/(1-0.378*(e/875))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-862.5,887.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-862.5),0,-u)'
'w875=q*x*100'
'qu875=ugrd_gds0_isbl*w875'
'qv875=vgrd_gds0_isbl.2*w875'
'a875=hdivg(qu875,qv875)'
'd w875/9.81'
'd qu875/9.81'
'd qv875/9.81'
'd a875/9.81*60*60*6'

'set lev 850'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/850))/(1-0.378*(e/850))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-837.5,862.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-837.5),0,-u)'
'w850=q*x*100'
'qu850=ugrd_gds0_isbl*w850'
'qv850=vgrd_gds0_isbl.2*w850'
'a850=hdivg(qu850,qv850)'
'd w850/9.81'
'd qu850/9.81'
'd qv850/9.81'
'd a850/9.81*60*60*6'

'set lev 825'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/825))/(1-0.378*(e/825))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-812.5,837.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-812.5),0,-u)'
'w825=q*x*100'
'qu825=ugrd_gds0_isbl*w825'
'qv825=vgrd_gds0_isbl.2*w825'
'a825=hdivg(qu825,qv825)'
'd w825/9.81'
'd qu825/9.81'
'd qv825/9.81'
'd a825/9.81*60*60*6'

'set lev 800'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/800))/(1-0.378*(e/800))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-787.5,812.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-787.5),0,-u)'
'w800=q*x*100'
'qu800=ugrd_gds0_isbl*w800'
'qv800=vgrd_gds0_isbl.2*w800'
'a800=hdivg(qu800,qv800)'
'd w800/9.81'
'd qu800/9.81'
'd qv800/9.81'
'd a800/9.81*60*60*6'

'set lev 775'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/775))/(1-0.378*(e/775))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-762.5,787.5-pres_gds0_sfc.5(z=1)/100),25,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-762.5),0,-u)'
'w775=q*x*100'
'qu775=ugrd_gds0_isbl*w775'
'qv775=vgrd_gds0_isbl.2*w775'
'a775=hdivg(qu775,qv775)'
'd w775/9.81'
'd qu775/9.81'
'd qv775/9.81'
'd a775/9.81*60*60*6'

'set lev 750'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/750))/(1-0.378*(e/750))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-725,762.5-pres_gds0_sfc.5(z=1)/100),37.5,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-725),0,-u)'
'w750=q*x*100'
'qu750=ugrd_gds0_isbl*w750'
'qv750=vgrd_gds0_isbl.2*w750'
'a750=hdivg(qu750,qv750)'
'd w750/9.81'
'd qu750/9.81'
'd qv750/9.81'
'd a750/9.81*60*60*6'

'set lev 700'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/700))/(1-0.378*(e/700))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-675,725-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-675),0,-u)'
'w700=q*x*100'
'qu700=ugrd_gds0_isbl*w700'
'qv700=vgrd_gds0_isbl.2*w700'
'a700=hdivg(qu700,qv700)'
'd w700/9.81'
'd qu700/9.81'
'd qv700/9.81'
'd a700/9.81*60*60*6'

'set lev 650'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/650))/(1-0.378*(e/650))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-625,675-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-625),0,-u)'
'w650=q*x*100'
'qu650=ugrd_gds0_isbl*w650'
'qv650=vgrd_gds0_isbl.2*w650'
'a650=hdivg(qu650,qv650)'
'd w650/9.81'
'd qu650/9.81'
'd qv650/9.81'
'd a650/9.81*60*60*6'

'set lev 600'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/600))/(1-0.378*(e/600))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-575,625-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-575),0,-u)'
'w600=q*x*100'
'qu600=ugrd_gds0_isbl*w600'
'qv600=vgrd_gds0_isbl.2*w600'
'a600=hdivg(qu600,qv600)'
'd w600/9.81'
'd qu600/9.81'
'd qv600/9.81'
'd a600/9.81*60*60*6'

'set lev 550'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/550))/(1-0.378*(e/550))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-525,575-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-525),0,-u)'
'w550=q*x*100'
'qu550=ugrd_gds0_isbl*w550'
'qv550=vgrd_gds0_isbl.2*w550'
'a550=hdivg(qu550,qv550)'
'd w550/9.81'
'd qu550/9.81'
'd qv550/9.81'
'd a550/9.81*60*60*6'

'set lev 500'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/500))/(1-0.378*(e/500))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-475,525-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-475),0,-u)'
'w500=q*x*100'
'qu500=ugrd_gds0_isbl*w500'
'qv500=vgrd_gds0_isbl.2*w500'
'a500=hdivg(qu500,qv500)'
'd w500/9.81'
'd qu500/9.81'
'd qv500/9.81'
'd a500/9.81*60*60*6'

'set lev 450'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/450))/(1-0.378*(e/450))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-425,475-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-425),0,-u)'
'w450=q*x*100'
'qu450=ugrd_gds0_isbl*w450'
'qv450=vgrd_gds0_isbl.2*w450'
'a450=hdivg(qu450,qv450)'
'd w450/9.81'
'd qu450/9.81'
'd qv450/9.81'
'd a450/9.81*60*60*6'

'set lev 400'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/400))/(1-0.378*(e/400))'
'x=const(maskout(pres_gds0_sfc.5(z=1)/100-375,425-pres_gds0_sfc.5(z=1)/100),50,-u)'
'x=const(maskout(x,pres_gds0_sfc.5(z=1)/100-375),0,-u)'
'w400=q*x*100'
'qu400=ugrd_gds0_isbl*w400'
'qv400=vgrd_gds0_isbl.2*w400'
'a400=hdivg(qu400,qv400)'
'd w400/9.81'
'd qu400/9.81'
'd qv400/9.81'
'd a400/9.81*60*60*6'

'set lev 350'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/350))/(1-0.378*(e/350))'
'w350=q*50*100'
'qu350=ugrd_gds0_isbl*w350'
'qv350=vgrd_gds0_isbl.2*w350'
'a350=hdivg(qu350,qv350)'
'd w350/9.81'
'd qu350/9.81'
'd qv350/9.81'
'd a350/9.81*60*60*6'

'set lev 300'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/300))/(1-0.378*(e/300))'
'w300=q*50*100'
'qu300=ugrd_gds0_isbl*w300'
'qv300=vgrd_gds0_isbl.2*w300'
'a300=hdivg(qu300,qv300)'
'd w300/9.81'
'd qu300/9.81'
'd qv300/9.81'
'd a300/9.81*60*60*6'

'set lev 250'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/250))/(1-0.378*(e/250))'
'w250=q*37.5*100'
'qu250=ugrd_gds0_isbl*w250'
'qv250=vgrd_gds0_isbl.2*w250'
'a250=hdivg(qu250,qv250)'
'd w250/9.81'
'd qu250/9.81'
'd qv250/9.81'
'd a250/9.81*60*60*6'

'set lev 225'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/225))/(1-0.378*(e/225))'
'w225=q*25*100'
'qu225=ugrd_gds0_isbl*w225'
'qv225=vgrd_gds0_isbl.2*w225'
'a225=hdivg(qu225,qv225)'
'd w225/9.81'
'd qu225/9.81'
'd qv225/9.81'
'd a225/9.81*60*60*6'

'set lev 200'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/200))/(1-0.378*(e/200))'
'w200=q*25*100'
'qu200=ugrd_gds0_isbl*w200'
'qv200=vgrd_gds0_isbl.2*w200'
'a200=hdivg(qu200,qv200)'
'd w200/9.81'
'd qu200/9.81'
'd qv200/9.81'
'd a200/9.81*60*60*6'

'set lev 175'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/175))/(1-0.378*(e/175))'
'w175=q*25*100'
'qu175=ugrd_gds0_isbl*w175'
'qv175=vgrd_gds0_isbl.2*w175'
'a175=hdivg(qu175,qv175)'
'd w175/9.81'
'd qu175/9.81'
'd qv175/9.81'
'd a175/9.81*60*60*6'

'set lev 150'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/150))/(1-0.378*(e/150))'
'w150=q*25*100'
'qu150=ugrd_gds0_isbl*w150'
'qv150=vgrd_gds0_isbl.2*w150'
'a150=hdivg(qu150,qv150)'
'd w150/9.81'
'd qu150/9.81'
'd qv150/9.81'
'd a150/9.81*60*60*6'

'set lev 125'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/125))/(1-0.378*(e/125))'
'w125=q*25*100'
'qu125=ugrd_gds0_isbl*w125'
'qv125=vgrd_gds0_isbl.2*w125'
'a125=hdivg(qu125,qv125)'
'd w125/9.81'
'd qu125/9.81'
'd qv125/9.81'
'd a125/9.81*60*60*6'

'set lev 100'
'esat=6.1078*pow(10,7.5*(tmp_gds0_isbl.3-273.15)/(237.3+(tmp_gds0_isbl.3-273.15)))'
'e=esat*rh_gds0_isbl.4/100'
'q=(0.622*(e/100))/(1-0.378*(e/100))'
'w100=q*12.5*100'
'qu100=ugrd_gds0_isbl*w100'
'qv100=vgrd_gds0_isbl.2*w100'
'a100=hdivg(qu100,qv100)'
'd w100/9.81'
'd qu100/9.81'
'd qv100/9.81'
'd a100/9.81*60*60*6'

t=t+1
endwhile

'disable fwrite'