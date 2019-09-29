function getSomething(){
    return 'something';
}

async function testAsync(){
    return 'Hello async';
}

async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1,v2);
}
function takeLongTime() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test2() {
    const v = await takeLongTime();
    console.log(v);
}

test2();
// test();