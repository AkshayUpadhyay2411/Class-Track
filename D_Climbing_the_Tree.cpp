#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
// #define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()

int cnt(int n){
    if(n==1)return 0;
    if(n%2){
        return 1+cnt(2*n+1);
    }else{
        return 1+cnt(n/2);
    }
}

void solve()
{ 
   while(1){
    ll t;
    cin>>t;
    if(t==-1){
        return;
    }
    cout<<cnt(t)<<endl;

   }
}

int main(){
    // ios_base::sync_with_stdio(false); cin.tie(NULL);cout.tie(NULL);
    int t=1;
    //cin>>t;
    while(t--) {
         solve();
    }
    return 0; 
}