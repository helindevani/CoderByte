function SwitchSort(arr) {
        let swap = 0;
        let visited = new Array(arr.length).fill(false);
        for (let i = 0; i < arr.length; i++) {
          let j = i;
          let counter = 0;
          while (!visited[j]) {
            visited[j] = true;
            j = arr[j] - 1;
            counter = counter + 1;
          }
          if (counter !== 0) {
            swap = swap + (counter - 1);
          }
        }
        return swap;
      }

      console.log(SwitchSort([2,3,2,7,5]));