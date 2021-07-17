name_friends_array=[];
function submit(){
    var display_friend_array=[];
    for(var i=1; i<=4; i++){
        var friend= document.getElementById("name_of_the_student_"+i).value
        name_friends_array.push(friend)
    }
    console.log(name_friends_array)
    var length_friends=name_friends_array.length
    for(var k=0; k<length_friends;k++){
    display_friend_array.push("<h4> name- "+name_friends_array[k]+"</h4>")   
    }
    document.getElementById("display_name_with_commas").innerHTML=display_friend_array
    var remove_commas=display_friend_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
    var display_friend_array=[];
    name_friends_array.sort()
    var length_friends=name_friends_array.length
    for(var k=0; k<length_friends;k++){
    display_friend_array.push("<h4> name- "+name_friends_array[k]+"</h4>")   
    }
    document.getElementById("display_name_with_commas").innerHTML=display_friend_array
    var remove_commas=display_friend_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_commas
}