package com.example.tinkerbeacon;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class TinkerBeaconMain extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tinker_beacon_main);
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.tinker_beacon_main, menu);
        return true;
    }
    
}
