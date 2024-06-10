/*NOTE===>
    JavaScript  Task  Document
Task  Title:
Develop  a  Sales  System
Task  Description:
Create  a  comprehensive  sales  system  that  allows  for  managing 
 ===>sales transactions,===>  tracking  inventory, ===> and  generating  sales  reports.  The  system  should 
 Sale{
 id
 transactions[]
 inventory[]
 reports[]
 }
 //TODO===> We Will make the saleinstance that will construct the data up
facilitate 
  SEARCH the  input  of  sales  data,
  SEARCH update  inventory  levels  in  real-time,
  SEARCH and  provide analytics for  sales  performance. ===>it will be an outbut data for every input 

This  task  involves  designing  and  implementing 
both  the  front-end  components  of  the  system,  ensuring  data  integrity and
user-friendly  interfaces.
Steps  to  Complete  the  Task
1.    Maintaining  javaScript  modules
a.    Create  a  javascript  file  for  storing  data  as  json  format.
b.    Create  endpoints  for  reading,  creating,updating  and  deleting  sales.
c.   NOTE Admin  can  know  who  created  the  sale. @@ Make a Model for every sale !! @@
d.    Create  sale  statistics  for
i.           Deleted  sales
ii.           Disabled  sales
iii.           sales  with  best  seller
iv.           sale  with  most  sealed  this  month  or  this  year
v.           The  total  sale  for  the  system
e.    NOTE All  sales  should  contain  the same  entity  params  .
f.      NOTEValidations  are  required  for  the  functions  who  need  it.
*/

/**
 * Data Mining
 * We Need an Array of Objects every object is one single sale data 
 * [
 * {:[]
 * },{},{}
 * ]
 */