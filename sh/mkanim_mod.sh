#! /bin/bash

#mk_ps
# list=$(ls *.gmf)
# i=1

# for file in $list
# do
#   IFS=. ARR=(${file})
#   IFS== BRR=(${ARR})

#   echo $i
#   if [[ $i -ge 1 && $i -lt 10 ]] ; then
#     echo $BRR=00$i.gmf
#     echo $BRR=00$i.ps
#     gxeps -c -i $BRR=$i.gmf -o $BRR=00$i.ps
#   elif [[ $i -ge 10 && $i -lt 100 ]] ; then
#     echo $BRR=0$i.gmf
#     echo $BRR=0$i.ps
#     gxeps -c -i $BRR=$i.gmf -o $BRR=0$i.ps
#   else
#     echo $BRR=$i.gmf
#     echo $BRR=$i.ps
#     gxeps -c -i $BRR=$i.gmf -o $BRR=$i.ps
#   fi

#   # rm $BRR=$i.gmf
#   i=$((i+1))
# done


#rename
list=$(ls *.png)
i=1

for file in $list
do
  IFS=. ARR=(${file})
  IFS== BRR=(${file})

  echo $i
  if [[ $i -ge 1 && $i -lt 10 ]] ; then
    echo $BRR=$i.png
    echo PWV_and_water_vapor_flux_t00$i.png
    # mv $BRR=$i.png PWV_and_water_vapor_flux_t00$i.png
    echo 00$i.png
    mv PWV_and_water_vapor_flux_t00$i.png 00$i.png
  elif [[ $i -ge 10 && $i -lt 100 ]] ; then
    echo $BRR=0$i.png
    echo PWV_and_water_vapor_flux_t0$i.png
    # mv $BRR=$i.png PWV_and_water_vapor_flux_t0$i.png
    echo 0$i.png
    mv PWV_and_water_vapor_flux_t0$i.png 0$i.png
  else
    echo $BRR=$i.png
    echo PWV_and_water_vapor_flux_t$i.png
    # mv $BRR=$i.png PWV_and_water_vapor_flux_t$i.png
    echo $i.png
    mv PWV_and_water_vapor_flux_t$i.png $i.png
  fi

  i=$((i+1))
done


#mk_pdf
# list=$(ls *.ps)
# i=1

# for file in $list
# do
#   echo $i
#   if [[ $i -ge 1 && $i -lt 10 ]] ; then
#     echo temp00$i.pdf
#     ps2img $file temp00$i.png
#   elif [[ $i -ge 10 && $i -lt 100 ]] ; then
#     echo temp0$i.pdf
#     ps2img $file temp0$i.png
#   else
#     echo temp$i.pdf
#     ps2img $file temp$i.png
#   fi
#   i=$((i+1))
# done

convert -delay 100 -loop 0 *.png test.gif
# convert -rotate 90 -delay 100 -dispose background temp*.pdf anim.gif
# rm temp*pdf

exit 0
