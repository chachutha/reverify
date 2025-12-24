const{test,expect, chromium}=require('@playwright/test')

    test.skip('test1',async ({page})=>{

        console.log("This is my test 1")
    })

    test('test2',async ({page})=>{

        console.log("This is my test 2")
    })

    test('test3',async ({page,browserName})=>{

        console.log("This is my test 3")

        if(browserName=='chromium')
        {
            test.skip()
        }
    })

    test('test4',async ({page})=>{

            test.fixme()
        console.log("test is fixed")
    })

    test('test5',async ({page})=>{

            test.fail() // exp
        console.log("test is failed")
        expect(1).toBe(2) // if both exp and act is failed then test will pass
    })

    test('test6',async ({page,browserName})=>{

        
        if(browserName=='chromium')

            {

        test.fail() // exp
        console.log("test is failed")
            }

          })
       test('test7',async ({page,browserName})=>{

        test.slow()
        await page.goto('https://demoblaze.com/')
        console.log("test is working")
            

})


    