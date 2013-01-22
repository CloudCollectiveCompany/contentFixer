contentFixer
============

Eran Schoellhorn | 1/19/13 | www.eran.sh

Description: A simple script to resize and vertically center content in a browser when components may be scaled without adversly affecting presention. The original implementation looks something like this...

    ----------------------
    |     #homeLogo      |
    |  |--------------|  |
    |  |              |  |
    |  |   #homeBox   |  |
    |  |              |  |
    |  |--------------|  |
    ------ #content ------

The script should first check to ensure that the content div fits within the viewport. If it does, the content is vertically centered and that's that. If it doesn't fit, then the widths of homeBox and homeLogo are reduced by 100px at a time until the content box DOES fit, then it's centered. 

Notes: I know, I know, there's probably a million things wrong with the way I've dont this. Just keep in mind, this is my first attempt at JS-- I'm not even done with my CodeAcademy lessons so lay off!

That's all for now. 

Love,
Eran
