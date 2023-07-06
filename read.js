function getPageno() {
  const param = new URLSearchParams(location.search);
  const no=parseInt(param.get('no'));

  if(isNaN(no)) {
  return 0;
  }else if(no<1) {
  return 0;
}
  return no;
}

async function fetch(no){
  const url=`http://sample.bmaster.kro.kr/contacts/${no}`;
  try{
    return await $.ajax(url);

  }catch(err){
    return null;
  }
}

function printContact(contact){
  $('#photo').attr('src',contact.photo);
  $('#name').text(contact.name);
  $('#address').text(contact.address);
  $('#tel').text(contact.tel);
}
