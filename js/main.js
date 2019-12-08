
function PageLoaded() {
    console.log('script fired')
}


function ShowContactInfo() {
    myContactsList = document.getElementById('online_presence_list')
    // console.log(myContactsList.childElementCount)

    if (myContactsList.childElementCount == 1) {
        
        var myInfoList = [
            ['Skype: ', 'cm91c3RhbS5jb25uZWN0aW9u','c2t5cGU6dXNlcm5hbWU/Y2hhdA=='],
            ['Telegram: ', 'Um91MTk5OQ==', 'aHR0cHM6Ly90Lm1lL1JvdTE5OTk='],
            ['Email: ', 'cm91c3RhbS50c0BnbWFpbC5jb20=', 'bWFpbHRvOiByb3VzdGFtLnRzQGdtYWlsLmNvbQ==']
        ]
        console.log(myInfoList, '<-----');
        
        myInfoList.forEach(PrepareItems);

        function PrepareItems(item) {
            // console.log(item,'<--- prep items')
            ContactListElement = MakeLink(item)
            // console.log(ContactListElement)
            myContactsList.appendChild(ContactListElement)
        }
    } else {
        console.log('Contacts are already displayed');
    }
}


function MakeLink(item, index){
    var contact_link = document.createElement('a');
    var list_item = document.createElement('li')
    contact_link.textContent = window.atob(item[1])
    contact_link.setAttribute('href',window.atob(item[2]))
    list_item.innerText = item[0]
    list_item.appendChild(contact_link)
    return list_item   
}
