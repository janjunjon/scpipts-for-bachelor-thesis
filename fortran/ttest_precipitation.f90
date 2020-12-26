!1970-2013年の8月のprecipの検定統計量Tと自由度mを求める
program test
 implicit none
 integer, parameter :: xdim = 1440, ydim = 480
 real*4 :: precip(xdim, ydim)
 real*4 :: sum2000(xdim, ydim)
 real*4 :: sum2001(xdim, ydim)
 real*4 :: sum2002(xdim, ydim)
 real*4 :: sum2003(xdim, ydim)
 real*4 :: sum2004(xdim, ydim)
 real*4 :: sum2005(xdim, ydim)
 real*4 :: sum2006(xdim, ydim)
 real*4 :: sum2007(xdim, ydim)
 real*4 :: sum2008(xdim, ydim)
 real*4 :: sum2009(xdim, ydim)
 real*4 :: sum2010(xdim, ydim)
 real*4 :: sum2011(xdim, ydim)
 real*4 :: sum2012(xdim, ydim)
 real*4 :: sum2013(xdim, ydim)
 real*4 :: sum2014(xdim, ydim)
 real*4 :: sum2015(xdim, ydim)
 real*4 :: sum2016(xdim, ydim)
 real*4 :: sum2017(xdim, ydim)
 real*4 :: sum2018(xdim, ydim)
 real*4 :: sum2019(xdim, ydim)
 real*4 :: si2000(xdim, ydim)
 real*4 :: si2001(xdim, ydim)
 real*4 :: si2002(xdim, ydim)
 real*4 :: si2003(xdim, ydim)
 real*4 :: si2004(xdim, ydim)
 real*4 :: si2005(xdim, ydim)
 real*4 :: si2006(xdim, ydim)
 real*4 :: si2007(xdim, ydim)
 real*4 :: si2008(xdim, ydim)
 real*4 :: si2009(xdim, ydim)
 real*4 :: si2010(xdim, ydim)
 real*4 :: si2011(xdim, ydim)
 real*4 :: si2012(xdim, ydim)
 real*4 :: si2013(xdim, ydim)
 real*4 :: si2014(xdim, ydim)
 real*4 :: si2015(xdim, ydim)
 real*4 :: si2016(xdim, ydim)
 real*4 :: si2017(xdim, ydim)
 real*4 :: si2018(xdim, ydim)
 real*4 :: si2019(xdim, ydim)
 real*4 :: Top5ave(xdim, ydim)
 real*4 :: Bottom5ave(xdim, ydim)
 real*4 :: Top5si(xdim, ydim)
 real*4 :: Bottom5si(xdim, ydim)
 real*4 :: otherAve1(xdim, ydim)
 real*4 :: otherAve2(xdim, ydim)
 real*4 :: otherAve(xdim, ydim)
 real*4 :: otherSi1(xdim, ydim)
 real*4 :: otherSi2(xdim, ydim)
 real*4 :: otherSi(xdim, ydim)
 real*4 :: tt(xdim, ydim)
 real*4 :: m1(xdim, ydim)
 real*4 :: m2(xdim, ydim)
 real*4 :: mm(xdim, ydim)
 real*4 :: sig(xdim, ydim)
 real*4 :: d_t(34), d_tt(34), d_ttt(37), test1, test2, test3
 integer :: i, j, k, y, m, d, t

 !open(10, file='mon-ave.bin', form='unformatted', &
 !& access='direct', recl=xdim*ydim*4)

 open(11, file='precip_2000_2019.grd', form='unformatted', &
 & access='direct', recl=xdim*ydim*4)

    !初期値を与える
    do j=1, ydim
      do i=1, xdim
        sum2000(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2001(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2002(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2003(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2004(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2005(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2006(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2007(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2008(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2009(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2010(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2011(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2012(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2013(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2014(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2015(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2016(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2017(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2018(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        sum2019(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2000(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2001(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2002(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2003(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2004(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2005(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2006(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2007(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2008(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2009(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2010(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2011(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2012(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2013(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2014(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2015(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2016(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2017(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2018(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        si2019(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        Top5ave(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        Bottom5ave(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        Top5si(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        Bottom5si(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherAve1(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherAve2(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherAve(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherSi1(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherSi2(i,j)=0
      end do
    end do

    do j=1, ydim
      do i=1, xdim
        otherSi(i,j)=0
      end do
    end do

    do m=1,53
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2000(i,j)= sum2000(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=54,113
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2001(i,j)= sum2001(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=114,155
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2002(i,j)= sum2002(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=156,208
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2003(i,j)= sum2003(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=209,252
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2004(i,j)= sum2004(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=253,290
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2005(i,j)= sum2005(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=291,339
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2006(i,j)= sum2006(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=340,380
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2007(i,j)= sum2007(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=381,420
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2008(i,j)= sum2008(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=421,483
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2009(i,j)= sum2009(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=484,519
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2010(i,j)= sum2010(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=520,568
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2011(i,j)= sum2011(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=569,623
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2012(i,j)= sum2012(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=624,666
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2013(i,j)= sum2013(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=667,715
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2014(i,j)= sum2014(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=716,773
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2015(i,j)= sum2015(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=774,818
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2016(i,j)= sum2016(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=819,842
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2017(i,j)= sum2017(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=843,877
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2018(i,j)= sum2018(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do

    do m=878,907
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            sum2019(i,j)= sum2019(i,j) + precip(i,j) !期間中のprecip合計
          end do
        end do
    end do


        !上位5年平均
        do j=1, ydim
          do i=1, xdim
            Top5ave(i,j)=(sum2006(i,j) +sum2012(i,j) +sum2009(i,j) +sum2003(i,j) +sum2011(i,j))/269
          end do
        end do

        !下位5年平均
        do j=1, ydim
          do i=1, xdim
            Bottom5ave(i,j)=(sum2004(i,j) +sum2002(i,j) +sum2017(i,j) +sum2005(i,j) +sum2013(i,j))/191 
          end do
        end do

        !その他10年平均
        do j=1, ydim
          do i=1, xdim
            otherAve1(i,j)= sum2000(i,j) +sum2001(i,j) +sum2007(i,j) +sum2008(i,j) +sum2010(i,j)
            otherAve2(i,j)= sum2014(i,j) +sum2015(i,j) +sum2016(i,j) +sum2018(i,j) +sum2019(i,j)
            otherAve(i,j)=(otherAve1(i,j) +otherAve2(i,j))/447
          end do
        end do


    !上位5年のprecip2乗偏差合計
    do m=291,339
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2006(i,j)= si2006(i,j) + (precip(i,j) - Top5ave(i,j))**2
          end do
        end do
    end do

    do m=569,623
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2012(i,j)= si2012(i,j) + (precip(i,j) - Top5ave(i,j))**2
          end do
        end do
    end do

    do m=421,483
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2009(i,j)= si2009(i,j) + (precip(i,j) - Top5ave(i,j))**2
          end do
        end do
    end do

    do m=156,208
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2003(i,j)= si2003(i,j) + (precip(i,j) - Top5ave(i,j))**2
          end do
        end do
    end do

    do m=520,568
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2011(i,j)= si2011(i,j) + (precip(i,j) - Top5ave(i,j))**2
          end do
        end do
    end do


    !下位5年のprecip2乗偏差合計
    do m=209,252
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2004(i,j)= si2004(i,j) + (precip(i,j) - Bottom5ave(i,j))**2
          end do
        end do
    end do

    do m=114,155
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2002(i,j)= si2002(i,j) + (precip(i,j) - Bottom5ave(i,j))**2
          end do
        end do
    end do

    do m=819,842
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2017(i,j)= si2017(i,j) + (precip(i,j) - Bottom5ave(i,j))**2
          end do
        end do
    end do

    do m=253,290
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2005(i,j)= si2005(i,j) + (precip(i,j) - Bottom5ave(i,j))**2
          end do
        end do
    end do

    do m=624,666
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2013(i,j)= si2013(i,j) + (precip(i,j) - Bottom5ave(i,j))**2
          end do
        end do
    end do

    !その他10年precip2乗偏差合計
    do m=1,53
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2000(i,j)= si2000(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=54,113
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2001(i,j)= si2001(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=340,380
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2007(i,j)= si2007(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=381,420
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2008(i,j)= si2008(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=484,519
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2010(i,j)= si2010(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=667,715
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2014(i,j)= si2014(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=716,773
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2015(i,j)= si2015(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=774,818
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2016(i,j)= si2016(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=843,877
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2018(i,j)= si2018(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do

    do m=878,907
      read(11,rec=m) precip
        do j=1, ydim
          do i=1, xdim
            si2019(i,j)= si2019(i,j) + (precip(i,j) - otherAve(i,j))**2
          end do
        end do
    end do


        !分散
        do j=1, ydim
          do i=1, xdim
            Top5si(i,j)= (si2006(i,j) + si2012(i,j) + si2009(i,j) + si2003(i,j) + si2011(i,j))/269
          end do
        end do

        do j=1, ydim
          do i=1, xdim
            Bottom5si(i,j)= (si2004(i,j) + si2002(i,j) + si2017(i,j) + si2005(i,j) + si2013(i,j))/191
          end do
        end do

        do j=1, ydim
          do i=1, xdim
            otherSi1(i,j)= si2000(i,j) +si2001(i,j) +si2007(i,j) +si2008(i,j) +si2010(i,j)
            otherSi2(i,j)= si2014(i,j) +si2015(i,j) +si2016(i,j) +si2018(i,j) +si2019(i,j)
            otherSi(i,j)=(otherSi1(i,j) +otherSi2(i,j))/447
          end do
        end do


        !検定統計量
        do j=1, ydim
          do i=1, xdim
            tt(i,j) = abs(Bottom5ave(i,j) - otherAve(i,j)) / sqrt(Bottom5si(i,j)/269 + otherSi(i,j)/447)
          end do
        end do

        !自由度
        do j=1, ydim
          do i=1, xdim
            m1(i,j) = (Bottom5si(i,j)/269 + otherSi(i,j)/191)**2
            m2(i,j) = (Bottom5si(i,j)**2)/((269**2)*(269-1)) + (otherSi(i,j)**2)/((447**2)*(447-1))
            mm(i,j) = m1(i,j) / m2(i,j)
            mm(i,j)=nint(mm(i,j))
          end do
        end do

    do i=1,34
      open(30,file='tbunnpu0.05.txt') !10%
      read(30,*)d_t(i)
    enddo
    
    do i=1,34
      open(50,file='tbunnpu0.025.txt') !5%
      read(50,*)d_tt(i)
    enddo

    do i=1,37
      open(40,file='tbunnpu0.005.txt') !1%
      read(40,*)d_ttt(i)
    enddo

do j=1, ydim
  do i=1, xdim

    if (mm(i,j) == 1)then
      test1=d_t(1)
      test2=d_tt(1)
      test3=d_ttt(1)
    else if (mm(i,j) == 2)then
      test1=d_t(2)
      test2=d_tt(2)
      test3=d_ttt(2)
    else if (mm(i,j) == 3)then
      test1=d_t(3)
      test2=d_tt(3)
      test3=d_ttt(3)
    else if (mm(i,j) == 4)then
      test1=d_t(4)
      test2=d_tt(4)
      test3=d_ttt(4)
    else if (mm(i,j) == 5)then
      test1=d_t(5)
      test2=d_tt(5)
      test3=d_ttt(5)
    else if (mm(i,j) == 6)then
      test1=d_t(6)
      test2=d_tt(6)
      test3=d_ttt(6)
    else if (mm(i,j) == 7)then
      test1=d_t(7)
      test2=d_tt(7)
      test3=d_ttt(7)
    else if (mm(i,j) == 8)then
      test1=d_t(8)
      test2=d_tt(8)
      test3=d_ttt(8)
    else if (mm(i,j) == 9)then
      test1=d_t(9)
      test2=d_tt(9)
      test3=d_ttt(9)
    else if (mm(i,j) == 10)then
      test1=d_t(10)
      test2=d_tt(10)
      test3=d_ttt(10)
    else if (mm(i,j) == 11)then
      test1=d_t(11)
      test2=d_tt(11)
      test3=d_ttt(11)
    else if (mm(i,j) == 12)then
      test1=d_t(12)
      test2=d_tt(12)
      test3=d_ttt(12)
    else if (mm(i,j) == 13)then
      test1=d_t(13)
      test2=d_tt(13)
      test3=d_ttt(13)
    else if (mm(i,j) == 14)then
      test1=d_t(14)
      test2=d_tt(14)
      test3=d_ttt(14)
    else if (mm(i,j) == 15)then
      test1=d_t(15)
      test2=d_tt(15)
      test3=d_ttt(15)
    else if (mm(i,j) == 16)then
      test1=d_t(16)
      test2=d_tt(16)
      test3=d_ttt(16)
    else if (mm(i,j) == 17)then
      test1=d_t(17)
      test2=d_tt(17)
      test3=d_ttt(17)
    else if (mm(i,j) == 18)then
      test1=d_t(18)
      test2=d_tt(18)
      test3=d_ttt(17)
    else if (mm(i,j) == 19)then
      test1=d_t(19)
      test2=d_tt(19)
      test3=d_ttt(19)
    else if (mm(i,j) == 20)then
      test1=d_t(20)
      test2=d_tt(20)
      test3=d_ttt(20)
    else if (mm(i,j) == 21)then
      test1=d_t(21)
      test2=d_tt(21)
      test3=d_ttt(21)
    else if (mm(i,j) == 22)then
      test1=d_t(22)
      test2=d_t(22)
      test3=d_ttt(22)
    else if (mm(i,j) == 23)then
      test1=d_t(23)
      test2=d_tt(23)
      test3=d_ttt(23)
    else if (mm(i,j) == 24)then
      test1=d_t(24)
      test2=d_tt(24)
      test3=d_ttt(24)
    else if (mm(i,j) == 25)then
      test1=d_t(25)
      test2=d_tt(25)
      test3=d_ttt(25)
    else if (mm(i,j) == 26)then
      test1=d_t(26)
      test2=d_tt(26)
      test3=d_ttt(26)
    else if (mm(i,j) == 27)then
      test1=d_t(27)
      test2=d_tt(27)
      test3=d_ttt(27)
    else if (mm(i,j) == 28)then
      test1=d_t(28)
      test2=d_tt(28)
      test3=d_ttt(28)
    else if (mm(i,j) == 29)then
      test1=d_t(29)
      test2=d_tt(29)
      test3=d_ttt(29)
    else if (mm(i,j).ge.30 .and. mm(i,j).le.35)then
      test1=d_t(30)
      test2=d_tt(30)
    else if (mm(i,j) .ge. 36 .and. mm(i,j).le.50)then
      test1=d_t(31)
      test2=d_tt(31)
    else if (mm(i,j).ge.51 .and. mm(i,j).le.90)then
      test1=d_t(32)
      test2=d_tt(32)
    else if (mm(i,j) .ge. 91 .and. mm(i,j).le.120)then
      test1=d_t(33)
      test2=d_tt(33)
    else if (mm(i,j) .ge. 121)then
      test1=d_t(34)
      test2=d_tt(34)
    endif

    if (mm(i,j) == 30)then
      test3=d_ttt(30)
    else if (mm(i,j).gt.30 .and. mm(i,j).le.40)then
      test3=d_ttt(31)
    else if (mm(i,j).gt.40 .and. mm(i,j).le.60)then
      test3=d_ttt(32)
    else if (mm(i,j).gt.60 .and. mm(i,j).le.80)then
      test3=d_ttt(33)
    else if (mm(i,j).gt.80 .and. mm(i,j).le.120)then
      test3=d_ttt(34)
    else if (mm(i,j).gt.120 .and. mm(i,j).le.180)then
      test3=d_ttt(35)
    else if (mm(i,j).gt.180 .and. mm(i,j).le.240)then
      test3=d_ttt(36)
    else if (mm(i,j).gt.240)then
      test3=d_ttt(37)
    else
      sig(i,j)=0
    endif

    !if (tt(i,j).gt.test3)then
      !sig(i,j)=3
    if (tt(i,j).gt.test2)then 
      sig(i,j)=2
    else if (tt(i,j).gt.test1)then
      sig(i,j)=1
    else
      sig(i,j)=0
    endif
     
  enddo
enddo


write(*,*) mm

  open(20, file='precip_ttest_Bottom5years.bin', form='unformatted', &
  & access='direct', recl=xdim*ydim*4)
  write(20,rec=1) sig

end program
