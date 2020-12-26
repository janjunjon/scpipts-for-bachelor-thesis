'open JRA_data/all_year.ctl'

'q file'
say result

filename=flux.grd
'set gxout fwrite'
'set undef dfile'
'set fwrite JRA_data/'filename

'set x 1 288'
'set y 1 145'

t=1
while(t<=3628)
'set t 't
'd sqrt(qu*qu+qv*qv)'
t=t+1
endwhile

'disable fwrite'