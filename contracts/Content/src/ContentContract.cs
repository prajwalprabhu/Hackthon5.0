using System;
using System.ComponentModel;
using System.Numerics;

using Neo;
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Attributes;
using Neo.SmartContract.Framework.Native;
using Neo.SmartContract.Framework.Services;

namespace Content
{
	[DisplayName("YourName.ContentContract")]
	[ManifestExtra("Author", "Your name")]
	[ManifestExtra("Email", "your@address.invalid")]
	[ManifestExtra("Description", "Describe your contract...")]
	public class ContentContract : SmartContract
	{
		private static Transaction Tx => (Transaction)Runtime.ScriptContainer;

		public void SetHello()
		{
			Storage.Put(Storage.CurrentContext, "Hi", "Hello");
		}
		public string GetHello()
		{
			return (string)Storage.Get(Storage.CurrentContext, "Hi");
		}
		public void StoreCreator(UInt160 from, long amt)
		{
			string data = Storage.Get(Storage.CurrentContext, Tx.Sender);
			if (data.Length > 0)
			{
				String Data = amt.ToString();
				Data.Insert(0, "\t");
				Data.Insert(0, from.ToString().Insert(0, "\n"));

				data.Insert(data.Length, Data);
				Storage.Put(Storage.CurrentContext, from, data);
			}
			else
			{
				String Data = amt.ToString();
				Data.Insert(0, "\t");
				String from_ = from.ToString();
				from_.Insert(0, "\n");
				Data.Insert(0, from_);
				Storage.Put(Storage.CurrentContext, Tx.Sender, Data);
			}
		}
		public string GetCreator()
		{
			return Storage.Get(Storage.CurrentContext, Tx.Sender);
		}
		public void StoreConsumer(UInt160 to, long amt)
		{
			string data = Storage.Get(Storage.CurrentContext, Tx.Sender);
			if (data.Length > 0)
			{
				string Data = amt.ToString();

				Data.Insert(0, "\t");
				Data.Insert(0, to.ToString().Insert(0, "\n"));

				data.Insert(data.Length, Data);
				Storage.Put(Storage.CurrentContext, to, data);
			}
			else
			{
				string Data = amt.ToString(

				).Insert(0, "\t").Insert(0, to.ToString().Insert(0, "\n"));
				Storage.Put(Storage.CurrentContext, Tx.Sender, Data);
			}
		}
		public string GetConsumer()
		{
			return Storage.Get(Storage.CurrentContext, Tx.Sender);
		}
	}
}
