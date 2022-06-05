import site, os, subprocess, platform
site.addsitedir(os.path.dirname(__file__))

if platform.system() == "Darwin":
    prev_dir = os.getcwd()
    os.chdir(os.path.dirname(__file__))
    try:
        subprocess.call(["sh", "./fix_rpaths.sh"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except:
        pass
    os.chdir(prev_dir)

from PDFNetPython import *
