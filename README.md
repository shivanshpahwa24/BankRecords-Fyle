You can check out the application at : https://bankrecords-fyle.herokuapp.com/

The application fulfils all the requirements that were mentioned by the team Fyle. Also, clicking on bank name would redirect to a bank page, with a route like banks/{bankid} that displays the details of the bank.

**API endpoints :-**

GET : https://bankrecords-fyle.herokuapp.com/api/branches/autocomplete?q=<> - For getting all possible matches based on the branch name ordered by IFSC code (ascending order) with limit and offset.

GET : https://bankrecords-fyle.herokuapp.com/api/branches?q=<> - For getting all possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset
