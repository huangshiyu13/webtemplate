/*------------------------------------------------------------------  
// Copyright (C) 2015 重庆四联测控技术有限公司版权所有。  
// 文件名：     SQLHelper.cs
// 功能描述：   SQLHelper，参考网上写的SQL帮助类//  文件功能描述只需简述，具体详情在类的注释中描述。
// 创建标识：   段成华20150525   //创建标识和修改标识由创建或修改人员的名称加日期组成。
// 修改标识：   //一天内有多个修改的只需做一个在注释说明中做一个修改标识就够了，？在所有的代码修改处加上修改标识的注释。？
// 修改描述：    //   修改目的（原因） 
// 修改标识：   
// 修改描述：
//---------------------------------------------------------------*/
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
//using Microsoft.International.Converters.PinYinConverter;
using System.Text;
using System.Web;

//namespace test 
//{ 
//public static class G 
//{ 
//public static string MyValue 
//} 
//} 

//访问：test.G.MyValue 

namespace DAL
{
    public static class Transfer
    {
        public static int ProgressRateMark = 0;
        public static int ProgressRateTest = 0;
        
 
                   
    }
    public class SQLHelper
    {

        private SqlConnection conn = null;
        private SqlCommand cmd = null;
        private SqlDataReader sdr = null;

        //构造函数
        public SQLHelper()
        {
            //DatabaseTest 引用自web.config connectionStrings中
            string strconn = ConfigurationManager.ConnectionStrings["DatabaseTest"].ConnectionString;
            conn = new SqlConnection(strconn);
        }

        //连接数据库
        private SqlConnection GetConn()
        {
            if (conn.State == ConnectionState.Closed)
            {
                conn.Open();
            }
            return conn;
        }

        //关闭数据库连接  
        private void OutConn()
        {
            if (conn.State == ConnectionState.Open)
            {
                conn.Close();
            }
        }

        //执行不带参数的增删改SQL语句或存储过程  
        public int ExecuteNonQuery(string cmdText, CommandType ct)
        {
            
            int res;
            try
            {
                cmd = new SqlCommand(cmdText, GetConn());
                cmd.CommandType = ct;
                res = cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                OutConn();
            }
            return res;
        }

        //执行带参数的增删改SQL语句或存储过程  
        public int ExecuteNonQuery(string cmdText, SqlParameter[] paras, CommandType ct)
        {
            int res;
            try
            {
                cmd = new SqlCommand(cmdText, GetConn());
                cmd.CommandType = ct;
                cmd.Parameters.AddRange(paras);
                res = cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                OutConn();
            }
            return res;
        }

        //执行不带参数的查询SQL语句或存储过程  
        public DataTable ExecuteQuery(string cmdText, CommandType ct)
        {
            DataTable dt = new DataTable();
            cmd = new SqlCommand(cmdText, GetConn());
            cmd.CommandType = ct;
            using (sdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
            {
                dt.Load(sdr);
            }
            return dt;
        }

        //执行带参数的查询SQL语句或存储过程  
        public DataTable ExecuteQuery(string cmdText, SqlParameter[] paras, CommandType ct)
        {
            DataTable dt = new DataTable();
            cmd = new SqlCommand(cmdText, GetConn());
            cmd.CommandType = ct;
            cmd.Parameters.AddRange(paras);
            using (sdr = cmd.ExecuteReader(CommandBehavior.CloseConnection))
            {
                dt.Load(sdr);
            }
            return dt;
        }
    }
}
