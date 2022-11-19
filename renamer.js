
'use strict';

const path = require('path');
const fs = require('fs');

const listDir = (dir, fileList = []) => {

    let files = fs.readdirSync(dir);

    files.forEach(file => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            let name = file.toLowerCase().replaceAll(' ','-').replaceAll(':','-').replaceAll('.','-');
            if(name !== file) {
                let src = path.join(dir, file);
                let newSrc = path.join(dir, name);
                fileList.push({
                    oldSrc: src,
                    newSrc: newSrc
                });
            }
            
            fileList = listDir(path.join(dir, file), fileList);
        } 
    });

    return fileList;
};

const listFiles = (dir, fileList = []) => {

    let files = fs.readdirSync(dir);

    files.forEach(file => {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            fileList = listFiles(path.join(dir, file), fileList);
        } else {
            
            // Figure 6.5: Altitudinal zonation of vegetation
                let name = file.toLowerCase()
                name = name.replace('figure','')
                name = name.replaceAll(' ','-').replaceAll(':','-');
                
                name = name.replaceAll('(','')
                name = name.replaceAll(')','')
                name = name.replaceAll('--','-')
                name = name.replaceAll('-–-','-')
                if(name.startsWith('-')) {
                    name = name.replace('-','')
                }
                if(name.length >= 60) {
                    name = name.substring(0,60) + name.substring(name.lastIndexOf('.'));
                }
                if(name !== file) {
                    let src = path.join(dir, file);
                    let newSrc = path.join(dir, name);
                    fileList.push({
                        oldSrc: src,
                        newSrc: newSrc
                    });
                }
        }
    });

    return fileList;
};

let foundDirectories = listDir( 'site/assets/images');
foundDirectories.forEach(f => {
    fs.renameSync(f.oldSrc, f.newSrc); 
});


let foundFiles = listFiles( 'site/assets/images');
foundFiles.forEach(f => {
    fs.renameSync(f.oldSrc, f.newSrc); 
});