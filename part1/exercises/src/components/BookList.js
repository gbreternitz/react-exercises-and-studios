export default function BookList() {
   let pageTitle = "List of Books";
   let book1 = "https://www.dispatch.com/gcdn/presto/2021/09/21/NCOD/2cda5279-49ee-4d3f-b76f-631b1c3ae29e-Cloud_Cuckoo_Land_by_Anthony_Doerr.jpg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2c9KxUjBAp3hVln5oRJtTXBCCsk-OKjQwGTn51yA0JBtgTWnujab6JW0MmuIuUOqICPY&usqp=CAU";
   let book3 = "https://cdn2.penguin.com.au/covers/original/9780963270702.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cloud Cuckoo Land cover" />
         <img src={book2} alt="Wise Blood Cover" />
         <img src={book3} alt="Satanic Verses cover" />
      </div>      
   );
}