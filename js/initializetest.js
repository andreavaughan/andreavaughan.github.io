

    (function(apiKey){
      (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
      v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
          o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
          y=e.createElement(n);y.async=!0;y.src='https://cdn.pendo.io/agent/static/'+apiKey+'/pendo.js';
          z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
  
          // Call this whenever information about your visitors becomes available
          // Please use Strings, Numbers, or Bools for value types.

          pendo.initialize({
            // disableCookies: true, 
            // disablePersistence: true, 
            // disableGuides: true,

              visitor: {
                  id:              'visitor6000',   // plz change back to visitor6000 after testing
                  // email:           'visitor6000@email.com',    // Recommended if using Pendo Feedback, or NPS Email
                  full_name:       'Test',
                  xtra_data:       'something here for payload',
                  ins_current_permissions: true,
                  // testforisempty:  'hi'
                  // role:         // Optional
  
                  // You can add any additional visitor level key-values here,
                  // as long as it's not one of the above reserved names.
              },
  
              account: {
                  id:             "account",
                  wow:            ['wow', 'wow2', 'WOW3'],
                  testforcode:    "accountName", 
                  planType:       "testhere"
                  // hostname:     'HOSTNAME',
                  // business_name: 'testbusiness'
                  // name:         // Optional
                  // is_paying:    // Recommended if using Pendo Feedback
                  // monthly_value:// Recommended if using Pendo Feedback
                  // planLevel:    // Optional
                  // planPrice:    // Optional
                  // creationDate: // Optional
  
                  // You can add any additional account level key-values here,
                  // as long as it's not one of the above reserved names.
              },
              

               
          });

        

    
 
  })('e013cfb9-d43a-4469-7bae-4916e01ed7b4');


