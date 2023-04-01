#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()


void solve()
{ 
    ll n;
    cin>>n;
    if(n%2==0){
        cout<<-1<<endl;
        return;
    }
    vector<int>ans;
    while(1){
        if(n==1)break;
        ll m=n/2;
        if(m%2==0){
            ans.push_back(1);
            n/=2;
            n++;
        }else{
            ans.push_back(2);
            n/=2;
        }
    }
    cout<<ans.size()<<endl;
    reverse(ans.begin(),ans.end());
    for(auto c:ans)cout<<c<<" ";cout<<endl;
}

int main(){
    ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL);
    int t=1;
    cin>>t;
    while(t--) {
         solve();
    }
    return 0; 
}