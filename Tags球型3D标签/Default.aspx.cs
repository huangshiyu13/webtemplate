using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web.Security;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;
using DAL;

public partial class _Default : System.Web.UI.Page
{
	SQLHelper SQLAss = new SQLHelper();

	protected void Page_Load(object sender, EventArgs e)
	{
		string sqlstr = "SELECT TableName,Url FROM MyDBTemp.dbo.Wonder ";
		using (var dtPass = SQLAss.ExecuteQuery(sqlstr, CommandType.Text))
		{
			rpImage.DataSource = dtPass;
			rpImage.DataBind();

		}

		Label1.Text = (Convert.ToInt32(null) == 0).ToString();


	}


}