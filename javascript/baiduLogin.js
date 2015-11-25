/**
 * Created by YANG on 15/10/10.
 */
var navMenu;  //遍历获取当前菜单对象
var offsetX;  //获取菜单选项离屏幕左边位移
var eIndex = 0;  //序列号状态变量

$(document).ready(function(){

    //进入页面搜索框获得聚焦效果
    $('.searchInput').focus();

    //鼠标移动到登陆和设置处显示下拉菜单效果
    $('.nameNav').each(function(index,value){
        $(value).mouseover(function(){
            if(index != eIndex){
                $('.loginMenu').eq(eIndex).css({
                    display:'none'
                });
                eIndex = index;
            }
            offsetX = $(value).get(0).offsetLeft-15;
            navMenu = $('.loginMenu').eq(index);
            navMenu.css({
                display:'block',
                left: offsetX
            });
        }).mouseout(function(){
            navMenu.css({
                    display:'none'
                });
            navMenu.mouseover(function(){
                navMenu.css({
                    display:'block'
                });
            }).mouseleave(function(){
                navMenu.css({
                    display:'none'
                });
            });
        });
    });

    //鼠标移动到更多产品处显示下拉菜单效果
    $('.moreNav').mouseover(function(){
        $('.moreNavMenu').css({
            display:'block'
        }).mouseout(function(){
            $('.moreNavMenu').mouseleave(function(){
                $('.moreNavMenu').css({
                    display:'none'
                });
            });
        });
    });


    //鼠标点击菜单栏右侧显示html页面
    $('.wrapMenus li').each(function(){
        $('.wrapMenus li').unbind('click').click(function() {
            $('.wrapMenusDemo').removeClass('wrapMenusDemo');
            $(this).addClass('wrapMenusDemo');
            $('.contentOn').removeClass('contentOn');
            $('.container1').eq($(this).index()).addClass('contentOn');
        });

    });

    //鼠标划过设置按钮图标变换
    $('.setting').mouseover(function(){
        $('.setting span').css({'background-position':'0 0'});
    }).mouseout(function(){
        $('.setting span').css({'background-position':'-22px 0'});
    });


    //遍历菜单选项改变样式边框效果(nav div)
    $('.header1 a').each(function(){
        $('.header1 a').click(function(){
            $('.header1 .tabOn').removeClass('tabOn');
            $(this).addClass('tabOn');
            $('.contentOn1').removeClass('contentOn1');
            $('.article0').eq($(this).index()).addClass('contentOn1');
        });
    });

    //遍历图像导航选项边框样式改变效果(news div)
    $('.imgNav img').each(function(){
        $('.imgNav img').click(function(){
            $('.imgOn').removeClass('imgOn');
            $(this).addClass('imgOn');
            $('.imgPic img').attr('src',$(this).attr('src'));
        });
    });

    //遍历音乐类型选项改变样式边框效果(music div)
    $('.listBox a').each(function(){
        $('.listBox a').click(function(){
            $('.listOn').removeClass('listOn');
            $(this).addClass('listOn');
        });
    });

    //遍历菜单导航选项切换电影和动漫显示效果(vedio div)
    $('.header5 a').each(function(){
        $('.header5 a').click(function(){
            $('.activeOn').removeClass('activeOn');
            $(this).addClass('activeOn');
            $('.articleOn').removeClass('articleOn');
            $('.article5').eq($(this).index()).addClass('articleOn');
        });
    });
});
