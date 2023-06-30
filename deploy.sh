    #!/usr/bin/env sh

    # abort on errors
    set -e

    # build
    npm run vite-build

    # navigate into the build output directory
    cd dist

    # place .nojekyll to bypass Jekyll processing
    echo > .nojekyll

    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME

    git init
    git checkout -B main
    git add -A
    git commit -m 'fix: 修正報到disable判斷'

    # if you are deploying to https://j870614.github.io
    # git push -f git@github.com:j870614/j870614.github.io.git main

    # if you are deploying to https://j870614.github.io/donglin-temple-system

     git push  https://github.com/j870614/donglin-temple-system.git main:gh-pages

    cd -