let a:number[]=[1,5,20,15,500,230,56,28,1200,789];

let max:number=a[0];

for (let i=0; i<a.length; i++) {

        if (a[i]>max) {
            max=a[i];
        }

}
alert("Il maggiore è " +max);