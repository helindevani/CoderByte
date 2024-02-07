function switchsort(arr){
    let n=arr.length;
    
    let posarr=[];
    for(let i=0;i<n;i++){
        posarr.push([arr[i],i]);
    }

    posarr.sort((a,b)=>(a[0]-b[0]));

    let vis=new Array(n);
    for(let i=0;i<n;i++){
        vis[i]=false;
    }

    let ans=0;

    for(let i=0;i<n;i++){
        if(vis[i] || posarr[i][1]==i){
            continue;
        }

        let size=0;
        let j=i;

        while(!vis[j]){
            vis[j]=true;

            j=posarr[j][1];

            size++;
        }
        if(size>0){
            ans += (size-1);
        }
        
    }
    return ans;
}
console.log(switchsort([4,3,2,1]));
console.log(switchsort([9,3,2]));