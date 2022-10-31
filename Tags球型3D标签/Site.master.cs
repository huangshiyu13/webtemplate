/*----------------------------------------------------------------  
// Copyright (C) 2015 重庆四联测控技术有限公司版权所有。  
// 文件名：         Site.master.cs
// 文件功能描述：   模板页练习的CS//  文件功能描述只需简述，具体详情在类的注释中描述。
// 创建标识：       段成华20150603   //创建标识和修改标识由创建或修改人员的名称加日期组成。
// 修改标识：       	//一天内有多个修改的只需做一个在注释说明中做一个修改标识就够了，？在所有的代码修改处加上修改标识的注释。？
// 修改描述：       //   修改目的（原因）
// 修改标识：   
// 修改描述：
//----------------------------------------------------------------*/

using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Principal;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class SiteMaster : MasterPage
{
    private const string AntiXsrfTokenKey = "__AntiXsrfToken";
    private const string AntiXsrfUserNameKey = "__AntiXsrfUserName";
    private string _antiXsrfTokenValue;

    protected void Page_Init(object sender, EventArgs e)
    {
        // 以下代码可帮助防御 XSRF 攻击
        var requestCookie = Request.Cookies[AntiXsrfTokenKey];
        Guid requestCookieGuidValue;
        if (requestCookie != null && Guid.TryParse(requestCookie.Value, out requestCookieGuidValue))
        {
            // 使用 Cookie 中的 Anti-XSRF 令牌
            _antiXsrfTokenValue = requestCookie.Value;
            Page.ViewStateUserKey = _antiXsrfTokenValue;
        }
        else
        {
            // 生成新的 Anti-XSRF 令牌并保存到 Cookie
            _antiXsrfTokenValue = Guid.NewGuid().ToString("N");
            Page.ViewStateUserKey = _antiXsrfTokenValue;

            var responseCookie = new HttpCookie(AntiXsrfTokenKey)
            {
                HttpOnly = true,
                Value = _antiXsrfTokenValue
            };
            if (FormsAuthentication.RequireSSL && Request.IsSecureConnection)
            {
                responseCookie.Secure = true;
            }
            Response.Cookies.Set(responseCookie);
        }

        Page.PreLoad += master_Page_PreLoad;
    }

    protected void master_Page_PreLoad(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            // 设置 Anti-XSRF 令牌
            ViewState[AntiXsrfTokenKey] = Page.ViewStateUserKey;
            ViewState[AntiXsrfUserNameKey] = Context.User.Identity.Name ?? String.Empty;
        }
        else
        {
            // 验证 Anti-XSRF 令牌
            if ((string)ViewState[AntiXsrfTokenKey] != _antiXsrfTokenValue
                || (string)ViewState[AntiXsrfUserNameKey] != (Context.User.Identity.Name ?? String.Empty))
            {
                throw new InvalidOperationException("Anti-XSRF 令牌验证失败。");
            }
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {


    }


    protected void Unnamed_LoggingOut(object sender, LoginCancelEventArgs e)
    {
        
    }
}