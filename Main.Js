var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "" , "file:///C:/Users/user/Downloads/IMG-7736.JPG", "file:///C:/Users/user/Downloads/IMG-7737.JPG", "file:///C:/Users/user/Downloads/IMG-7740.JPG"];
var names = ["Family Book","Ramakrishna Parupudi", "Seema Gurunath", "Ishan Parupudi", "khushi Parupudi",];
var i = 0;
function change()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
