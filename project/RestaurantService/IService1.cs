using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace RestaurantService
{
    // 注意: 使用“重构”菜单上的“重命名”命令，可以同时更改代码和配置文件中的接口名“IService1”。
    [ServiceContract]
    public interface IService1
    {

        [OperationContract]
        string GetData(int value);

        [OperationContract]
        CompositeType GetDataUsingDataContract(CompositeType composite);

        // TODO: 在此添加您的服务操作
    }


    // 使用下面示例中说明的数据约定将复合类型添加到服务操作。
    [DataContract]
    public class CompositeType
    {
        bool boolValue = true;
        string stringValue = "Hello ";

        [DataMember]
        public bool BoolValue
        {
            get { return boolValue; }
            set { boolValue = value; }
        }

        [DataMember]
        public string StringValue
        {
            get { return stringValue; }
            set { stringValue = value; }
        }
    }


    [DataContract]
    public class Menu
    {
        string menuDescription = "";
        string menuName = "Hello ";
        decimal price = 0;
        int quantity;
        string flavor;
        string rating;
        bool isAvailable;
        bool isNew;
        bool isActivation;

        [DataMember]
        public string MenuDescription
        {
            get { return menuDescription; }
            set { menuDescription = value; }
        }

        [DataMember]
        public string MenuName
        {
            get { return menuName; }
            set { menuName = value; }
        }

        [DataMember]
        public decimal Price
        {
            get { return price; }
            set { price = value; }
        }

        [DataMember]
        public int Quantity
        {
            get { return quantity; }
            set { quantity = value; }
        }

        [DataMember]
        public string Flavor
        {
            get { return flavor; }
            set { flavor = value; }
        }

        [DataMember]
        public string Rating
        {
            get { return rating; }
            set { rating = value; }
        }

        [DataMember]
        public bool IsAvailable
        {
            get { return isAvailable; }
            set { isAvailable = value; }
        }

        [DataMember]
        public bool IsNew
        {
            get { return isNew; }
            set { isNew = value; }
        }

        [DataMember]
        public bool IsActivation
        {
            get { return isActivation; }
            set { isActivation = value; }
        }
    }
}
