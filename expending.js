const containmodule = document.querySelectorAll(".container>.module");
containmodule.forEach(item => {
    item.addEventListener('click',()=>{
    [].filter.call(item.parentElement.children, el=>el!==item).forEach(
        el=>el.classList.remove("active"));
        item.classList.add('active')
    });
});

// const containmodule = document.querySelectorAll(".container > .module");

// // �� NodeList ת��Ϊ���飬Ȼ��ʹ�� forEach
// Array.from(containmodule).forEach(item => {
//     item.addEventListener('click', () => {
//         // ����Ԫ��ת��Ϊ���鲢���ˣ��Ƴ�����Ԫ�ص� 'active' ��
//         Array.from(item.parentElement.children)
//             .filter(el => el !== item)
//             .forEach(el => el.classList.remove('active'));

//         // ����ǰ�����Ԫ����� 'active' ��
//         item.classList.add('active');
//     });
// });
