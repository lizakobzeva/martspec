#!/bin/bash

FILES=*.png
for f in org/$FILES
do
	sips -Z 64  $f --out $f.size64
	pngcrush -brute $f.size64 $f.size64.new		
   	cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f.size64.new -o "${f:4:${#f}-8}".64.webp 	
  	

	sips -Z 512  $f --out $f.size512
	pngcrush -brute $f.size512 $f.size512.new		
  	cwebp -lossless -z 9 -m 6 -mt -hint picture -metadata none $f.size512.new -o "${f:4:${#f}-8}".512.webp 	
done

rm org/*size64
rm org/*size512
rm org/*.new

cp vitamin.en.512.webp vitamin.ar.512.webp
cp vitamin.en.512.webp vitamin.de.512.webp
cp vitamin.en.512.webp vitamin.es.512.webp
cp vitamin.en.512.webp vitamin.fr.512.webp
cp vitamin.en.512.webp vitamin.hi.512.webp
cp vitamin.en.512.webp vitamin.ja.512.webp
cp vitamin.en.512.webp vitamin.pt.512.webp


cp bodysize.en.512.webp bodysize.ar.512.webp
cp bodysize.en.512.webp bodysize.de.512.webp
cp bodysize.en.512.webp bodysize.es.512.webp
cp bodysize.en.512.webp bodysize.fr.512.webp
cp bodysize.en.512.webp bodysize.hi.512.webp
cp bodysize.en.512.webp bodysize.ja.512.webp
cp bodysize.en.512.webp bodysize.pt.512.webp

cp header_screens.en.512.webp header_screens.ar.512.webp
cp header_screens.en.512.webp header_screens.de.512.webp
cp header_screens.en.512.webp header_screens.es.512.webp
cp header_screens.en.512.webp header_screens.fr.512.webp
cp header_screens.en.512.webp header_screens.hi.512.webp
cp header_screens.en.512.webp header_screens.ja.512.webp
cp header_screens.en.512.webp header_screens.pt.512.webp