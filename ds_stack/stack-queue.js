let queue = [];
let currentQueue = queue.length;
let maxSize = 5;

let enqueue = (newVal) => {
    if(currentQueue >= maxSize) {
        return;
    };
    queue[currentQueue] = newVal;
    currentQueue++;
};

let dequeue = () => {
    if(currentQueue > 0) {
        for(let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        };
        currentQueue--;
        queue.length = currentQueue;
    } else {
        alert(`Queue is empty...`);
    };
};

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
enqueue(70);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
console.log(queue);