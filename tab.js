function sum(numbers){
    let size=numbers.length;
    let sum=0;
    for (let i=0;i<size;i++){
        sum+=numbers[i];
    }
    return sum;
}

function sum2(numbers){
    let sum=0;
    for (let number in numbers){
        sum+=numbers[number];
    }
    return sum;
}

function longestWord(words){
    let size=words.length;
    let longest=0;
    let lword;
    for (let i=0;i<size;i++){
        if (words[i].length>longest){
            lword=words[i];
            longest=words[i].length
        }
    }
    return lword;
}

function range(min,max,step){
    let tab=[];
    let i=0;
    let j=0;
    while (i<=max){
        if (min+step*j<=max){
            tab.push(min+step*j);
        }
        i=min+step*j;
        j++;
    }
    return tab;
}

function nbOccurences(text,mot){
    let tab=text.split(" ");
    let size=text.length;
    let occur=0;
    for (let i=0;i<size;i++){
        if (tab[i]==mot){
            occur++;
        }
    }
    return occur;
}

function flatten2D(array){
    let tab=[];
    let size=array.length;
    for (let i=0;i<size;i++){
        for (let j=0;j<array[i].length;j++){
            tab.push(array[i][j]);
        }
    }
return tab;
}

function prenom(tab){
    console.log(tab);
    tab.pop();
    tab.push("Jacques");
    console.log(tab);
}

function multiplication(){
    for (let i=0; i<=9;i++){
        for (let j=0;j<=9;j++){
            console.log(i+"*"+j+"="+i*j);
        }
    }
}

function cesarcode(mots,code){
    mots=mots.split("");
    let size=mots.length
    let ascii;
    for (let i=0;i<size;i++){
        ascii=mots[i].charCodeAt(0);
        if (ascii>=65 && ascii <=90){
            ascii+=code;
            if (ascii>90){
                ascii-=26
            }
        }
        if (ascii>=97 && ascii <=122){
            ascii+=code;
            if (ascii>122){
                ascii-=26;
            }
        }
        mots[i]=String.fromCharCode(ascii);
    }
    return mots.join("");
}

function cesardecode(mots,code){
    mots=mots.split("");
    let size=mots.length
    let ascii;
    for (let i=0;i<size;i++){
        ascii=mots[i].charCodeAt();
        if (ascii>=65 && ascii <=90){
            ascii-=code;
            if (ascii<65){
                ascii+=26
            }
        }
        if (ascii>=97 && ascii <=122){
            ascii-=code;
            if (ascii<97){
                ascii+=26;
            }
        }
        mots[i]=String.fromCharCode(ascii);
    }
    return mots.join("");;
}

function viginerecode(mots,code){

}

function vigineredecode(mots,code){
    codes=code.split("");
}