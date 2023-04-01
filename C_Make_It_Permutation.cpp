#include<bits/stdc++.h>
using namespace std;

#define ll int64_t
#define endl "\n"
const ll mod=998244353;
const ll INF = 1e16;
#define all(x) x.begin(),x.end()


void solve()
{ 
    ll n,c,d;
    cin>>n>>c>>d;

    vector<int>val(n);
    for(int i=0;i<n;i++)cin>>val[i];

    sort(all(val));
    vector<int>pref(n+1);
    for(int i=1;i<n;i++){
        if(val[i]==val[i-1]){
            pref[i+1]++;
        }
    }
    for(int i=1;i<=n;i++)pref[i]+=pref[i-1];
    // for(int i=0;i<=n;i++)cout<<pref[i]<<" ";cout<<endl;
    ll ans=n*c + d;
    for(ll i=n-1;i>=0;i--){
        ll bg=n-i-1;
        ll db=pref[i+1];

        ans=min(ans, (bg+db)*c + (val[i]-i-1+db)*d);
    }
    cout<<ans<<endl;
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